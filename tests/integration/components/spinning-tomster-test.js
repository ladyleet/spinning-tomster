import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('spinning-tomster', 'Integration | Component | spinning tomster', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{spinning-tomster}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#spinning-tomster}}
      template block text
    {{/spinning-tomster}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
