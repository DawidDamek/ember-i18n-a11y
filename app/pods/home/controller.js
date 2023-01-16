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
}
