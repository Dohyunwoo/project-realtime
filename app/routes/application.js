import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var now = new Date();
    var nowTime = now.getHours() + "시" + now.getMinutes() + "분" + now.getSeconds() + "초";
    return nowTime;
  }
});
