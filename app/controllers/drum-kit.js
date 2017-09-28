import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    log(sound) {
      console.log(sound.sound);
    }
  }
});
