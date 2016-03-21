import Ember from 'ember';
import Configuration from './../configuration';

export default Ember.Mixin.create({
  basePath: Ember.computed(function() {
    return Configuration.accountBasePath;
  }),

  actions: {
    register() {
      this.set('loading', true);
      this.set('errorMessage', '');

      const properties = this.getProperties('name', 'nickname', 'password', 'passwordConfirmation');
      
      Ember.$.ajax({
	url: this.get('basePath'),
	type: 'POST',
	dataType: 'json',
	headers: {
          'Content-Type': 'application/vnd.api+json'
	},
	data: JSON.stringify({
          data: {
            type: 'accounts',
            attributes: {
              name: properties['name'],
              nickname: properties['nickname'],
              password: properties['password'],
             'password-confirmation': properties['passwordConfirmation']
            }
          }
        })
      }).then((response) => {
	this.set('loading', false);
        console.log('Registered successfully');
      }, (reason) => {
        this.set('loading', false);
        var error = reason.responseJSON.errors[0].title;
        console.log('Registration failed: ' + error);
        this.set('errorMessage', error);
      });
    }
  }
});
