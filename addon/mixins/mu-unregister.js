import Ember from 'ember';
import Configuration from './../configuration';

export default Ember.Mixin.create({
  basePath: Ember.computed(function() {
    return Configuration.accountBasePath;
  }),

  actions: {
    unregister() {
      Ember.$.ajax({
        url: this.get('basePath') + '/current',
        type: 'DELETE',
        headers: {
          'Content-Type': 'application/vnd.api+json'
        }
      });
    }
  }
});
