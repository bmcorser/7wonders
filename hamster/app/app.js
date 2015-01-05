// import _ from 'lodash';
import $ from 'jquery';
import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var _ = $;

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

App.postDefaults = {
  url: 'https://localhost:8080/api/inventory/crud',
  headers: {Authorization: 'Basic Ym1jb3JzZXJAZ21haWwuY29tOmFiYzEyM2Z1'},
};

App.crudDefaults = {
  object: 'dnamolecule',
  read: {
    filter: {},
    expand: [['dnafeatures']],
    __please_dont_mutate_cols__: true,
    page_size: 10,
    page: 1,
  }
};

App.DnamoleculeRoute = Ember.Route.extend({
  model: function (params) {
    var data =  _.merge(crudDefaults,
                        {read: {filter: {id: params.dnamoleculeId}}});
    return $.post(_.merge(postDefaults, {data: JSON.stringify(data)}));
  },
  serialize: function (dnamolecule) {
    return {dnamoleculeId: dnamolecule.get('dnamoleculeId')};
  }
});

App.IndexRoute = Ember.Route.extend({
  model: function () {
    return $.post(_.merge(postDefaults, {data: JSON.stringify(crudDefaults)}));
  }
});


export default App;
