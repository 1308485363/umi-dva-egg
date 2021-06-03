'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;

  const logDD = middleware.logDD();
  const uppercase = middleware.uppercase(123);
  const PrivateRouter = router.namespace('/api', uppercase);

  router.get('/news', logDD, controller.new.list);

  router.get('/user/:id/:name', controller.user.info);

  PrivateRouter.get('/search', controller.search.uppercase);

  router.get('*', controller.home.index);
};
