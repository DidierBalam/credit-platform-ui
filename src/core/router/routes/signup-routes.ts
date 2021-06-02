const signupRoutes = {
  path: '/signup',
  name: 'Signup',
  component: () => import('../../../modules/signup/SignupModule.vue'),
};

export { signupRoutes };
