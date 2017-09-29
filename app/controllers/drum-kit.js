import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    log(tone) {
      console.log(tone);
    }
  }
});
