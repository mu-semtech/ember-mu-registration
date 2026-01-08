import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Configuration from '../configuration';

export default class MuRegisterComponent extends Component {
  @tracked loading = false;
  @tracked errorMessage = '';
  @tracked name = '';
  @tracked nickname = '';
  @tracked password = '';
  @tracked passwordConfirmation = '';

  get basePath() {
    return Configuration.accountBasePath;
  }

  _init() {
    this.loading = false;
    this.name = '';
    this.nickname = '';
    this.password = '';
    this.passwordConfirmation = '';
  }

  @action
  async register(event) {
    event.preventDefault();

    this.loading = true;
    this.errorMessage = '';

    const properties = {
      name: this.name,
      nickname: this.nickname,
      password: this.password,
      passwordConfirmation: this.passwordConfirmation,
    };

    try {
      const response = await fetch(this.basePath, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/vnd.api+json',
        },
        body: JSON.stringify({
          data: {
            type: 'accounts',
            attributes: {
              name: properties.name,
              nickname: properties.nickname,
              password: properties.password,
              'password-confirmation': properties.passwordConfirmation,
            },
          },
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        const error = errorData.errors[0].title;
        console.log('Registration failed: ' + error);
        this.errorMessage = error;
        this.loading = false;
      } else {
        this._init();
      }
    } catch (e) {
      console.log('Registration failed: ' + e.message);
      this.errorMessage = e.message;
      this.loading = false;
    }
  }
}
