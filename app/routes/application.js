import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['Drum Kit', 'Sidebar', 'Switch', 'Table'];
  }
});
