import Ember from 'ember';
import MuRegisterMixin from 'ember-mu-registration/mixins/mu-register';
import { module, test } from 'qunit';

module('Unit | Mixin | mu register');

// Replace this with your real tests.
test('it works', function (assert) {
  let MuRegisterObject = Ember.Object.extend(MuRegisterMixin);
  let subject = MuRegisterObject.create();
  assert.ok(subject);
});
