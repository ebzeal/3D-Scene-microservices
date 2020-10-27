import { Router } from 'express';
import DashboardController from '../controllers/dashboardController';

import AccessMiddleware from '../middlewares/accessMiddleware';

const { authoriseUser } = AccessMiddleware;

const dashboardRoutes = Router();
const {
  getDashboardData
} = DashboardController;

dashboardRoutes.get('/dashboard', authoriseUser, getDashboardData);

export default dashboardRoutes;
