import { omitGuard } from "../guards/auth-guard"

const signupRoutes = {
  path: '/signup',
  name: 'Signup',
  component: () => import('../../../modules/signup/SignupModule.vue'),
  beforeEnter: omitGuard
};

export { signupRoutes };
