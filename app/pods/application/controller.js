import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import axe from 'axe-core';
import { scheduleOnce } from '@ember/runloop';

export default class ApplicationController extends Controller {
  @service router;

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
