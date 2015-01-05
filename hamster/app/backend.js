import $ from "jquery";

var postDefaults = {
  method: 'POST',
  url: 'http://localhost:8080/api/inventory/crud',
  headers: {Authorization: 'Basic Ym1jb3JzZXJAZ21haWwuY29tOmFiYzEyM2Z1'},
};
var crudDefaults = {
  object: 'dnamolecule',
  read: {
    filter: {},
    expand: [['dnafeatures']],
    __please_dont_mutate_cols__: true,
    page_size: 10,
    page: 1,
  }
};
var callBackend = function (overrides, handleRead) {
  var data = $.extend(crudDefaults, overrides);
  var opts = $.extend(postDefaults, {data: JSON.stringify(data)});
  return $.ajax(opts).then(handleRead);
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
var backend = {
  list: list,
  one: one,
};
export default backend;
