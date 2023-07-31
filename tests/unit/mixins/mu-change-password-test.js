/* eslint-disable ember/no-new-mixins */
/* eslint-disable ember/no-mixins */
import EmberObject from '@ember/object';
import MuChangePasswordMixin from 'ember-mu-registration/mixins/mu-change-password';
import { module, test } from 'qunit';

module('Unit | Mixin | mu change password');

// Replace this with your real tests.
test('it works', function (assert) {
  let MuChangePasswordObject = EmberObject.extend(MuChangePasswordMixin);
  let subject = MuChangePasswordObject.create();
  assert.ok(subject);
});
