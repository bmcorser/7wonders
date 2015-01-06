define(function (require) {
  var _ = require('lodash');
  var Q = require('q');
  var http = require('plugins/http');

  var url = 'http://localhost:8080/api/inventory/crud';
  var headers = {Authorization: 'Basic Ym1jb3JzZXJAZ21haWwuY29tOmFiYzEyM2Z1'};
  var baseInstruction = {
    object: 'dnamolecule',
    read: {
      expand: [['dnafeatures']],
      __please_dont_mutate_cols__: true,
      page_size: 10,
      page: 1,
    }
  };
  var callBackend = function (instruction, handleRead) {
    var localInstruction = _.merge(instruction, baseInstruction);
    return Q.when(http.post(url, localInstruction, headers)).then(handleRead);
  };
  var one = function (id) {
    var returnRead = function (data) {
      return data.read[0];
    };
    return callBackend({read: {filter: {id: id}}}, returnRead);
  };
  var list = function () {
    var returnRead = function (data) {
      return data.read;
    };
    return callBackend({read: {filter: {}}}, returnRead);
  };
  return {
    list: list,
    one: one,
  };
});
