import Ember from 'ember';
import layout from '../templates/components/mu-unregister';
import MuUnregisterMixin from 'ember-mu-registration/mixins/mu-unregister';

export default Ember.Component.extend(MuUnregisterMixin, {
  layout: layout,
  classNames: ['mu-unregister'],
});
