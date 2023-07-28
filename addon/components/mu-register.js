import Ember from 'ember';
import layout from '../templates/components/mu-register';
import MuRegisterMixin from 'ember-mu-registration/mixins/mu-register';

export default Ember.Component.extend(MuRegisterMixin, {
  layout: layout,
  classNames: ['mu-register'],
});
