import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';

const beforeEnter = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
): void => {
  if (to.fullPath === '/session') next('/session/signin');
  else next();
};

export { beforeEnter as beforeEnterSessionGuard };
