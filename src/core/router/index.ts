import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { signinRoutes } from './routes/signin-routes';
import { signupRoutes } from './routes/signup-routes';
import { adminRoutes } from './routes/admin-routes';
import { applicationRoutes } from './routes/application-routes';
import { userRoutes } from "./routes/user-routes"

const routes: Array<RouteRecordRaw> = [
  signinRoutes,
  signupRoutes,
  userRoutes,
  ...adminRoutes,
  ...applicationRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
