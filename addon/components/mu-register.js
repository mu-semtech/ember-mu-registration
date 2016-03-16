import Ember from 'ember';
import layout from '../templates/components/mu-register';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['mu-register'],
  store: Ember.inject.service('store'),
  actions: {
    register() {
      this.set('loading', true);
      this.set('errorMessage', '');
      const properties = this.getProperties('name', 'nickname', 'password', 'passwordConfirmation');
      var account = this.get('store').createRecord('account', properties);
      account.save().then().catch((reason) => {
	this.set('loading', false);
	var error = reason.errors[0].title;
	console.log('Registration failed: ' + error);
	this.set('errorMessage', error);
      });
    }
  }
});
