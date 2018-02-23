import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return ['Drum Kit', 'Sidebar', 'Switch', 'Table'];
  }
});
