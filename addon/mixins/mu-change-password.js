import { computed } from '@ember/object';
import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import Configuration from './../configuration';

// eslint-disable-next-line ember/no-new-mixins
export default Mixin.create({
  basePath: computed(function () {
    return Configuration.accountBasePath;
  }),

  _init() {
    this.setProperties({
      oldPassword: '',
      newPassword: '',
      newPasswordConfirmation: '',
    });
  },

  actions: {
    changePassword() {
      this.set('errorMessage', '');

      const properties = {
        oldPassword: this.oldPassword,
        newPassword: this.newPassword,
        newPasswordConfirmation: this.newPasswordConfirmation,
      };

      // eslint-disable-next-line ember/no-jquery
      $.ajax({
        url: this.basePath + '/current/changePassword',
        type: 'PATCH',
        dataType: 'json',
        headers: {
          'Content-Type': 'application/vnd.api+json',
        },
        data: JSON.stringify({
          data: {
            type: 'accounts',
            id: 'current',
            attributes: {
              'old-password': properties['oldPassword'],
              'new-password': properties['newPassword'],
              'new-password-confirmation':
                properties['newPasswordConfirmation'],
            },
          },
        }),
      }).then(
        () => {
          this._init();
        },
        (reason) => {
          var error = reason.responseJSON.errors[0].title;
          console.log('Password change failed: ' + error);
          this.set('errorMessage', error);
        }
      );
    },
  },
});
