import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import { useStore } from "@/store/index";

const authGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
): void => {
  const store = useStore()
  if (store.getters.isAuth) next();
  else next('/signin');
};

const omitGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
): void => {
  const store = useStore()
  if (store.getters.isAuth) next('/');
  else next();
};

export { authGuard, omitGuard }
