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
    this.set('loading', false);
    this.setProperties({
      name: '',
      nickname: '',
      password: '',
      passwordConfirmation: '',
    });
  },

  actions: {
    register() {
      this.set('loading', true);
      this.set('errorMessage', '');

      const properties = {
        name: this.name,
        nickname: this.nickname,
        password: this.password,
        passwordConfirmation: this.passwordConfirmation,
      };

      // eslint-disable-next-line ember/no-jquery
      $.ajax({
        url: this.basePath,
        type: 'POST',
        dataType: 'json',
        headers: {
          'Content-Type': 'application/vnd.api+json',
        },
        data: JSON.stringify({
          data: {
            type: 'accounts',
            attributes: {
              name: properties['name'],
              nickname: properties['nickname'],
              password: properties['password'],
              'password-confirmation': properties['passwordConfirmation'],
            },
          },
        }),
      }).then(
        () => {
          this._init();
        },
        (reason) => {
          this.set('loading', false);
          var error = reason.responseJSON.errors[0].title;
          console.log('Registration failed: ' + error);
          this.set('errorMessage', error);
        }
      );
    },
  },
});
