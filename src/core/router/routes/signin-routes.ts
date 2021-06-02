const signinRoutes = {
  path: '/signin',
  name: 'Signin',
  component: () => import('../../../modules/signin/SigninModule.vue'),
};

export { signinRoutes };
