import Ember from 'ember';
import Configuration from './../configuration';

export default Ember.Mixin.create({
  basePath: Ember.computed(function() {
    return Configuration.accountBasePath;
  }),

  _init() {
    this.setProperties({
      oldPassword: '',
      newPassword: '',
      newPasswordConfirmation: ''
    });
  },

  actions: {
    changePassword() {
      this.set('errorMessage', '');

      const properties = this.getProperties('oldPassword', 'newPassword', 'newPasswordConfirmation');
      
      Ember.$.ajax({
	url: this.get('basePath') + '/current/changePassword',
	type: 'PATCH',
	dataType: 'json',
	headers: {
          'Content-Type': 'application/vnd.api+json'
	},
	data: JSON.stringify({
          data: {
            type: 'accounts',
	    id: 'current',
            attributes: {
             'old-password': properties['oldPassword'],
             'new-password': properties['newPassword'],
             'new-password-confirmation': properties['newPasswordConfirmation']
            }
          }
        })
      }).then((response) => {
	this._init();
      }, (reason) => {
        var error = reason.responseJSON.errors[0].title;
        console.log('Password change failed: ' + error);
        this.set('errorMessage', error);
      });
    }
  }
});
