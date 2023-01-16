import { module, test } from 'qunit';
import { setupTest } from 'accessibility-app/tests/helpers';

module('Unit | Route | home/car', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:home/car');
    assert.ok(route);
  });
});
