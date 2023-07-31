import EmberObject from '@ember/object';
import { typeOf } from '@ember/utils';

const DEFAULTS = {
  accountBasePath: '/accounts',
};

/**
  Ember Mu Registration's configuration object.

  To change any of these values, set them on the application's environment
  object, e.g.:

  ```js
  // config/environment.js
  ENV['ember-mu-registration'] = {
    accountBasePath: '/accounts'
  };
  ```

  @class Configuration
  @extends Object
  @module ember-mu-registration/configuration
  @public
*/
export default {
  /**
    Base path for the registration requests

    @property accountBasePath
    @readOnly
    @static
    @type String
    @default '/accounts'
    @public
  */
  accountBasePath: DEFAULTS.accountBasePath,

  load(config) {
    let wrappedConfig = EmberObject.create(config);
    for (let property in this) {
      if (
        Object.prototype.hasOwnProperty.call(this, property) &&
        typeOf(this[property]) !== 'function'
      ) {
        this[property] = wrappedConfig.get(property);
        if (this[property] === undefined) {
          this[property] = DEFAULTS[property];
        }
      }
    }
  },
};
