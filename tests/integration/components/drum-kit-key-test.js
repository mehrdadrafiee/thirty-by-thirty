import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('drum-kit-key', 'Integration | Component | drum kit key', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{drum-kit-key}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#drum-kit-key}}
      template block text
    {{/drum-kit-key}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
