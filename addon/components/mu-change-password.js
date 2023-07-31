// eslint-disable-next-line ember/no-classic-components
import Component from '@ember/component';
import layout from '../templates/components/mu-change-password';
// eslint-disable-next-line ember/no-mixins
import MuChangePasswordMixin from 'ember-mu-registration/mixins/mu-change-password';

export default class MuChangePassword extends Component.extend(
  MuChangePasswordMixin
) {
  layout = layout;
}
