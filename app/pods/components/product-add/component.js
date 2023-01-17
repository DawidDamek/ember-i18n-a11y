import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class ProductAddComponent extends Component {
  @tracked productNumber = 0;
  @service intl;

  @action
  setProductNumber({ target: { value } }) {
    if (value < 0) {
      return;
    }
    this.productNumber = value;
    console.log(this.intl.locale);
  }
}
