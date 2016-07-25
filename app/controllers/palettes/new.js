import Ember from 'ember';

export default Ember.Controller.extend({
  focusColor: null,
  actions: {
    setFocusColor(color) {
      this.set('focusColor', color);
    }
  }
});