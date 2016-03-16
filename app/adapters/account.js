import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  isInvalid(status, headers, payload) {
    return ~~(status / 100) === 4 ;
  },
});
