import Ember from 'ember';
import layout from '../templates/components/mu-change-password';
import MuChangePasswordMixin from 'ember-mu-registration/mixins/mu-change-password';

export default Ember.Component.extend(MuChangePasswordMixin, {
  layout: layout,
  classNames: ['mu-change-password']
});
