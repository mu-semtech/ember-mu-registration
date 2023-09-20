import { computed } from '@ember/object';
import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import Configuration from './../configuration';

// eslint-disable-next-line ember/no-new-mixins
export default Mixin.create({
  basePath: computed(function () {
    return Configuration.accountBasePath;
  }),

  actions: {
    unregister() {
      // eslint-disable-next-line ember/no-jquery
      $.ajax({
        url: this.basePath + '/current',
        type: 'DELETE',
        headers: {
          'Content-Type': 'application/vnd.api+json',
        },
      });
    },
  },
});
