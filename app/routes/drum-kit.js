import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
    {
      'data-key': 65,
      kbd: 'A',
      sound: 'clap'
    },
    {
      'data-key': 83,
      kbd: 'S',
      sound: 'hihat'
    },
    {
      'data-key': 68,
      kbd: 'D',
      sound: 'kick'
    },
    {
      'data-key': 70,
      kbd: 'F',
      sound: 'openhat'
    },
    {
      'data-key': 71,
      kbd: 'G',
      sound: 'boom'
    },
    {
      'data-key': 72,
      kbd: 'H',
      sound: 'ride'
    },
    {
      'data-key': 74,
      kbd: 'J',
      sound: 'snare'
    },
    {
      'data-key': 75,
      kbd: 'K',
      sound: 'tom'
    },
    {
      'data-key': 75,
      kbd: 'L',
      sound: 'tink'
    }];
  }
});
