import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { storageFor } from 'ember-local-storage';

export default class ApplicationRoute extends Route {
  @service intl;

  @storageFor('settings') settings;

  async beforeModel() {
    const language = await this.settings.get('language');
    this.intl.setLocale([language]);
  }
}
