import { module, test } from 'qunit';
import { setupTest } from 'accessibility-app/tests/helpers';

module('Unit | Route | home/bike', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:home/bike');
    assert.ok(route);
  });
});
