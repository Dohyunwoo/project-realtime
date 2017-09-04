import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    function realTime() {
      var time = new Date();
      var clock = document.getElementById('clock');
      clock.innerHTML = time.getHours() + '시' + time.getMinutes() + '분' + time.getSeconds() + '초';
    }
    setInterval(function(){realTime()}, 1000);
  }
});
