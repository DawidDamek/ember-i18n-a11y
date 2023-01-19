import Controller from '@ember/controller';
import { action } from '@ember/object';
import { storageFor } from 'ember-local-storage';
import { inject as service } from '@ember/service';
import axe from 'axe-core';
import { scheduleOnce } from '@ember/runloop';

export default class HomeController extends Controller {
  @service intl;
  @service store;

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
  async setDarkMode() {
    await this.settings.set('darkMode', true);
    document.body.classList.add('darkmode');
  }
  @action
  async setLightMode() {
    await this.settings.set('language', false);
    document.body.classList.remove('darkmode');
  }

  @action
  auditA11Y() {
    // eslint-disable-next-line ember/no-incorrect-calls-with-inline-anonymous-functions
    scheduleOnce('afterRender', this, () => {
      console.log('dasad');
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
