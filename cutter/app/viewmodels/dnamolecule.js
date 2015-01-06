define(function (require) {
  var backend = require('backend');
  var ko = require('knockout');
  var koMapping = require('knockout-mapping');
  var gcContent = function (dnamolecule) {
    var gcCount = dnamolecule.sequence.bases.match(/[GC]/g).length;
    return gcCount / dnamolecule.length * 100;
  };
  return {
    activate: function (id) {
      var binding = this;
      return backend.one(id).then(function (dnamolecule) {
        ko.utils.extend(binding, koMapping.fromJS(dnamolecule));
        ko.utils.extend(binding, {
          gcContent: gcContent(dnamolecule),
        });
      });
    }
  };
});
