/* eslint-disable ember/no-new-mixins */
/* eslint-disable ember/no-mixins */
import EmberObject from '@ember/object';
import MuRegisterMixin from 'ember-mu-registration/mixins/mu-register';
import { module, test } from 'qunit';

module('Unit | Mixin | mu register');

// Replace this with your real tests.
test('it works', function (assert) {
  let MuRegisterObject = EmberObject.extend(MuRegisterMixin);
  let subject = MuRegisterObject.create();
  assert.ok(subject);
});
