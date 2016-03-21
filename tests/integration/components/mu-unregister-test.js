import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mu-unregister', 'Integration | Component | mu unregister', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{mu-unregister}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#mu-unregister}}
      template block text
    {{/mu-unregister}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
