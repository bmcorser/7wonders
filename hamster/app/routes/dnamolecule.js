import Ember from "ember";
import backend from '../backend';

export default Ember.Route.extend({
  model: function (params) {
    return backend.one(params.dnamoleculeId);
  },
  serialize: function (dnamolecule) {
    return {dnamoleculeId: dnamolecule.get('dnamoleculeId')};
  }
});
