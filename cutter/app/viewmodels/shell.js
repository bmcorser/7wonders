define(['plugins/router'], function (router) {
  return {
    router: router,
    activate: function () {
      router.map([
        {
          route: '',
          title: 'home',
          moduleId: 'viewmodels/home'
        },
        {
          route: 'dnamolecule/:id',
          hash: '#/dnamolecule',
          title: 'dnamolecule',
          moduleId: 'viewmodels/dnamolecule'
        }
      ]);
      return router.activate();
    }
  };
});
