// eslint-disable-next-line ember/no-classic-components
import Component from '@ember/component';
import layout from '../templates/components/mu-unregister';
// eslint-disable-next-line ember/no-mixins
import MuUnregisterMixin from 'ember-mu-registration/mixins/mu-unregister';

export default class MuUnregister extends Component.extend(MuUnregisterMixin) {
  layout = layout;
}
