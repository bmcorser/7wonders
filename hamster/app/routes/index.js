import Ember from "ember";
import backend from '../backend';

export default Ember.Route.extend({
  model: function () {
    return backend.list();
  }
});
