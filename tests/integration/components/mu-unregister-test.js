import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | mu-unregister', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<MuUnregister />`);

    assert.dom(this.element).hasText('Unregister');

    // // Template block usage:
    // await render(hbs`
    //   <MuUnregister>
    //     template block text
    //   </MuUnregister>
    // `);

    // assert.dom(this.element).hasText('template block text');
  });
});
