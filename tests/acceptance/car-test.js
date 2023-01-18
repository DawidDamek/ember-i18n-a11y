import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'accessibility-app/tests/helpers';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

module('Acceptance | car', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /car', async function (assert) {
    await visit('/car');
    await a11yAudit();

    assert.ok(true, 'no a11y errors found!');
  });
});
