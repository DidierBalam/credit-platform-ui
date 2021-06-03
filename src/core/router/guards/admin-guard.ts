import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import { useStore } from "@/store/index";

const adminGuard = (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
): void => {
    const store = useStore()
    if (store.getters.isAdmin) next();
    else next('/');
};

export { adminGuard }
