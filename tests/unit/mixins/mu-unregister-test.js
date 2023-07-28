import Ember from 'ember';
import MuUnregisterMixin from 'ember-mu-registration/mixins/mu-unregister';
import { module, test } from 'qunit';

module('Unit | Mixin | mu unregister');

// Replace this with your real tests.
test('it works', function (assert) {
  let MuUnregisterObject = Ember.Object.extend(MuUnregisterMixin);
  let subject = MuUnregisterObject.create();
  assert.ok(subject);
});
