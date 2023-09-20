/* eslint-disable ember/no-new-mixins */
/* eslint-disable ember/no-mixins */
import EmberObject from '@ember/object';
import MuUnregisterMixin from 'ember-mu-registration/mixins/mu-unregister';
import { module, test } from 'qunit';

module('Unit | Mixin | mu unregister');

// Replace this with your real tests.
test('it works', function (assert) {
  let MuUnregisterObject = EmberObject.extend(MuUnregisterMixin);
  let subject = MuUnregisterObject.create();
  assert.ok(subject);
});
