import Component from '@glimmer/component';
import { action } from '@ember/object';
import Configuration from '../configuration';

export default class MuUnregisterComponent extends Component {
  get basePath() {
    return Configuration.accountBasePath;
  }

  @action
  async unregister() {
    await fetch(this.basePath + '/current', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/vnd.api+json',
      },
    });
  }
}
