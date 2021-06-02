const adminRoutes = [
  {
    path: '/admin',
    name: 'admin',
    component: () =>
      import('../../../modules/admin/dashboard/DashboardModule.vue'),
  },
  {
    path: '/admin/users',
    name: 'user-manager',
    component: () =>
      import('../../../modules/admin/user-manager/UserManagerModule.vue'),
  },
  {
    path: '/admin/applications',
    name: 'application-manager',
    component: () =>
      import(
        '../../../modules/admin/application-manager/ApplicationManagerModule.vue'
      ),
  },
];

export { adminRoutes };
