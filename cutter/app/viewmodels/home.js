define(function (require) {
  var ko = require('knockout');
  var _ = require('lodash');
  var backend = require('backend');
  return {
    dnamolecules: ko.observableArray([]),
    activate: function () {
      var binding = this;
      return backend.list().then(function (dnamolecules) {
        binding.dnamolecules(_.map(dnamolecules, function (dnamolecule) {
          dnamolecule.hash = '#/dnamolecule/' + dnamolecule.id;
          return dnamolecule;
        }));
      });
    }
  };
});
