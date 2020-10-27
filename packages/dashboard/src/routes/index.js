import { Router } from 'express';
import dashboardRoutes from './dashboard';

const route = Router();

route.get('/', (req, res) => {
  res.status(200).json('DB loaded');
});

route.use(dashboardRoutes);

export default route;
