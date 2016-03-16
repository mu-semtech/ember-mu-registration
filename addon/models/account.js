import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  nickname: DS.attr(),
  password: DS.attr(),
  passwordConfirmation: DS.attr()
});
