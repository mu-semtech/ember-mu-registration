import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Configuration from '../configuration';

export default class MuChangePasswordComponent extends Component {
  @tracked errorMessage = '';
  @tracked oldPassword = '';
  @tracked newPassword = '';
  @tracked newPasswordConfirmation = '';

  get basePath() {
    return Configuration.accountBasePath;
  }

  _init() {
    this.oldPassword = '';
    this.newPassword = '';
    this.newPasswordConfirmation = '';
  }

  @action
  async changePassword(event) {
    event.preventDefault();

    this.errorMessage = '';

    const properties = {
      oldPassword: this.oldPassword,
      newPassword: this.newPassword,
      newPasswordConfirmation: this.newPasswordConfirmation,
    };

    try {
      const response = await fetch(this.basePath + '/current/changePassword', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/vnd.api+json',
        },
        body: JSON.stringify({
          data: {
            type: 'accounts',
            id: 'current',
            attributes: {
              'old-password': properties.oldPassword,
              'new-password': properties.newPassword,
              'new-password-confirmation': properties.newPasswordConfirmation,
            },
          },
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        const error = errorData.errors[0].title;
        console.log('Password change failed: ' + error);
        this.errorMessage = error;
      } else {
        this._init();
      }
    } catch (e) {
      console.log('Password change failed: ' + e.message);
      this.errorMessage = e.message;
    }
  }
}
