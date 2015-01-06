define(function (require) {
  var backend = require('backend');
  var ko = require('knockout');
  var koMapping = require('knockout-mapping');
  var gcContent = function (dnamolecule) {
    var gcCount = dnamolecule.sequence.bases.match(/[GC]/g).length;
    return gcCount / dnamolecule.length * 100;
  };
  return function () {
    var binding = this;
    this.activate = function (id) {
      return backend.one(id).then(function (dnamolecule) {
        ko.utils.extend(binding, koMapping.fromJS(dnamolecule));
        return ko.utils.extend(binding, {
          gcContent: gcContent(dnamolecule),
        });
      });
    };
  };
});
