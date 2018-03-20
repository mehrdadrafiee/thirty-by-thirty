import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | drum kit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:drum-kit');
    assert.ok(route);
  });
});
