import Ember from 'ember';
import ENV from '../config/environment';
import Configuration from 'ember-mu-registration/configuration';

export default {
  name:       'ember-mu-registration',
  initialize: function(registry) {
    const config   = ENV['ember-mu-registration'] || {};
    Configuration.load(config);
  }
};
