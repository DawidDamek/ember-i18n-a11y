import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ProductAddComponent extends Component {
  @tracked productNumber;

  @action
  setProductNumber({ target: { value } }) {
    this.productNumber = value;
  }
}
