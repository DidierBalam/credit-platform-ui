import { adminGuard } from "../guards/admin-guard";
import { authGuard } from "../guards/auth-guard"

const adminRoutes = [
  {
    path: '/admin',
    name: 'admin',
    component: () =>
      import('../../../modules/admin/dashboard/DashboardModule.vue'),
    beforeEnter: [authGuard, adminGuard],
  },
  {
    path: '/admin/users',
    name: 'user-manager',
    component: () =>
      import('../../../modules/admin/user-manager/UserManagerModule.vue'),
    beforeEnter: [authGuard, adminGuard],
  },
  {
    path: '/admin/applications',
    name: 'application-manager',
    component: () =>
      import(
        '../../../modules/admin/application-manager/ApplicationManagerModule.vue'
      ),
    beforeEnter: [authGuard, adminGuard],
  },
];

export { adminRoutes };
