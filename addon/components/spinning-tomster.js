import Ember from 'ember';
import layout from '../templates/components/spinning-tomster';

export default Ember.Component.extend({
  layout: layout,
  scrollamount: 20,
  tomster: 'tomster',
  tomsterImage: Ember.computed('tomster',function(){
  	return `/spinning-tomster/images/${this.get('tomster')}.png`.htmlSafe();
  }),
  didInsertElement(){
  	let marquee=this.$('marquee');
  	marquee.on('bounce');
  }
});
