import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;

  async beforeModel() {
    const bike = {
      name: 'Bike',
      description: 'cool bike description',
      photoUrl:
        'https://erharowery.pl/wp-content/uploads/2021/07/Rower-miejski-KANDS-Escape-26-3BN-alu-3-biegi-mietowo-bialy-mat-scaled.jpg',
    };
    const doll = {
      name: 'doll',
      description: 'cool doll description',
      photoUrl:
        'https://www.zielonezabawki.pl/data/gfx/pictures/medium/4/0/25704_1.jpg',
    };
    const car = {
      name: 'Car',
      description: 'cool car description',
      photoUrl:
        'https://bi.im-g.pl/im/a4/50/1b/z28639652Q,Cupra-Formentor-VZ5-Taiga-Grey.jpg',
    };
    await this.store.createRecord('product', bike).save();
    await this.store.createRecord('product', doll).save();
    await this.store.createRecord('product', car).save();
  }
}
