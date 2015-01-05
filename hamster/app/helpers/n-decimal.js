import Ember from 'ember';

var decimalHelper = function (number, places) {
  return parseFloat(number).toFixed(places);
};

export default Ember.Handlebars.makeBoundHelper(decimalHelper);
