import Ember from 'ember';

export default Ember.ObjectController.extend({
  gcContent: function () {
    var gcCount = this.get('sequence').bases.match(/[GC]/g).length;
    return gcCount / this.get('length') * 100;
  }.property('model.gcContent')
});
