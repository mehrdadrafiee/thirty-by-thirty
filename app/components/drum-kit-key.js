import Ember from 'ember';

let { Component, inject } = Ember;

export default Component.extend({
  // function removeTransition(e) {
  //   if (e.propertyName !== 'transform') return;
  //   e.target.classList.remove('playing');
  // }
  //
  // function playSound(e) {
  //   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  //   const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  //   if (!audio) return;
  //
  //   key.classList.add('playing');
  //   audio.currentTime = 0;
  //   audio.play();
  // }
  //
  // const keys = Array.from(document.querySelectorAll('.key'));
  // keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  // window.addEventListener('keydown', playSound);

  playing: false,

  actions: {
    playSound(e) {
      const audio = this.$(`audio[data-key]`)[0];
      const key = this.$(`div[data-key]`)[0];
      if (!audio) return;

      this.toggleProperty('playing');
      // key.classList.add('playing');
      if (this.get('playing')) {
        audio.currentTime = 0;
        audio.play(e);
      }
    }
  }
});
