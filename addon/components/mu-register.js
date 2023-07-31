// eslint-disable-next-line ember/no-classic-components
import Component from '@ember/component';
import layout from '../templates/components/mu-register';
// eslint-disable-next-line ember/no-mixins
import MuRegisterMixin from 'ember-mu-registration/mixins/mu-register';

export default class MuRegister extends Component.extend(MuRegisterMixin) {
  layout = layout;
}
