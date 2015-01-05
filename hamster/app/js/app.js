App = Ember.Application.create();
App.Router.map(function () {
  this.resource('index', {path: '/'});
  this.resource('dnamolecule');
});

App.IndexRoute = Ember.Route.extend({
  model: function () {
    return [{name: 'a'}, {name: 'b'}];
  },
});
