import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent(
  'mu-change-password',
  'Integration | Component | mu change password',
  {
    integration: true,
  }
);

test('it renders', function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{mu-change-password}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    <MuChangePassword>
      template block text
    </MuChangePassword>
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
