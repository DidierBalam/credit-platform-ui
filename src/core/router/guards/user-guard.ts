import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import { useStore } from "@/store/index";

const userGuard = (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
): void => {
    const store = useStore()
    if (!store.getters.isAdmin) next();
    else next('/admin');
};

export { userGuard }
