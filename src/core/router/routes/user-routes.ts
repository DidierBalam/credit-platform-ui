
import { authGuard } from "../guards/auth-guard"
import { userGuard } from "../guards/user-guard";

const userRoutes = {
    path: '/',
    name: 'Home',
    component: () => import('../../../modules/user/home/HomeModule.vue'),
    beforeEnter: [authGuard, userGuard]
};

export { userRoutes };
