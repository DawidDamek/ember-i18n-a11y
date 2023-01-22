import Controller from '@ember/controller';
import { action } from '@ember/object';
import { storageFor } from 'ember-local-storage';
import { inject as service } from '@ember/service';
import axe from 'axe-core';
import { scheduleOnce } from '@ember/runloop';
import { tracked } from '@glimmer/tracking';

export default class HomeController extends Controller {
  @service intl;
  @service store;
  @tracked isDarkMode = this.settings.get('darkMode');

  @storageFor('settings') settings;

  @action
  async onSetLanguage({ target: { value } }) {
    const language = value;
    await this.settings.set('language', language);
    this.intl.setLocale([language]);
  }

  get today() {
    return new Date();
  }

  @action
  async toggleMode() {
    this.auditA11Y();
    this.isDarkMode = !this.isDarkMode;
    await this.settings.set('darkMode', this.isDarkMode);
    document.body.classList.toggle('darkmode');
  }

  auditA11Y() {
    // eslint-disable-next-line ember/no-incorrect-calls-with-inline-anonymous-functions
    scheduleOnce('afterRender', this, () => {
      axe.run().then(({ violations }) => {
        if (violations.length) {
          violations.map(
            ({ description, id, impact, help, helpUrl, nodes = [] }) => {
              nodes.map(({ target }) => {
                const element = document.querySelector(target);
                console.log(id, description, help, helpUrl, impact, element);
                element.style.background = 'red';
              });
            }
          );
          throw new Error('Accessibility issues found');
        }
      });
    });
  }
}
