import { authGuard } from "../guards/auth-guard"
import { userGuard } from "../guards/user-guard";

const applicationRoutes = [
  {
    path: '/application/create',
    name: 'Create',
    component: () =>
      import(
        '../../../modules/application/creator/ApplicationCreatorModule.vue'
      ),
    beforeEnter: [authGuard, userGuard]
  },
  {
    path: '/application/:id',
    name: 'Reviewer',
    component: () =>
      import(
        '../../../modules/application/reviewer/ApplicationReviewerModule.vue'
      ),
    beforeEnter: authGuard
  },
];

export { applicationRoutes };
