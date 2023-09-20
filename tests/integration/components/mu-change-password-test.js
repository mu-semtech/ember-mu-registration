import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | mu-change-password', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<MuChangePassword />`);

    assert
      .dom(this.element)
      .hasText(
        'Old password New password Confirm new password Change password'
      );

    // // Template block usage:
    // await render(hbs`
    //   <MuChangePassword>
    //     template block text
    //   </MuChangePassword>
    // `);

    // assert.dom(this.element).hasText('template block text');
  });
});
