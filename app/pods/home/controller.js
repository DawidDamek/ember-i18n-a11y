import Controller from '@ember/controller';
import { action } from '@ember/object';
import { storageFor } from 'ember-local-storage';
import { inject as service } from '@ember/service';

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
}
