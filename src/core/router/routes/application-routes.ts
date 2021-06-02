const applicationRoutes = [
  {
    path: '/application/create',
    name: 'Create',
    component: () =>
      import(
        '../../../modules/application/creator/ApplicationCreatorModule.vue'
      ),
  },
  {
    path: '/application/:id',
    name: 'Reviewer',
    component: () =>
      import(
        '../../../modules/application/reviewer/ApplicationReviewerModule.vue'
      ),
  },
];

export { applicationRoutes };
