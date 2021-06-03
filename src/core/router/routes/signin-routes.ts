import { omitGuard } from "../guards/auth-guard"

const signinRoutes = {
  path: '/signin',
  name: 'Signin',
  component: () => import('../../../modules/signin/SigninModule.vue'),
  beforeEnter: omitGuard
};

export { signinRoutes };
