import Ember from 'ember';

export default Ember.Controller.extend({
  focusColor: null,
  actions: {
    setFocusColor(color) {
      this.set('focusColor', color);
    },
    savePalette() {
      var palette = this.get('model');
      palette.save().then(() => {this.transitionToRoute('palettes.index');}, (err) => {Ember.Logger.log(err);});
  },
    cancel() {
      var palette = this.get('model');
      palette.rollbackAttributes();
      var colors = palette.get('colors');
      colors.forEach((color)=>{
        color.rollbackAttributes();
      });
      this.transitionToRoute('palettes');
    },
    deletePalette() {
      var palette = this.get('model');
      palette.destroyRecord();
      this.transitionToRoute('palettes');
    }
  },
  focusColorStyleString: Ember.computed('focusColor.r', 'focusColor.g', 'focusColor.b', function() {
    var r = this.get('focusColor.r');
    var g = this.get('focusColor.g');
    var b = this.get('focusColor.b');
    if (r || g || b) {
      return Ember.String.htmlSafe(`background-color:rgb(${r}, ${g}, ${b})`);
    } else {
      return Ember.String.htmlSafe('background-color:transparent; border:1px solid #586073');
    }
  })
});
