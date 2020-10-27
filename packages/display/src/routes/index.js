import { Router } from 'express';
import displayRoutes from './display';

const route = Router();

route.get('/', (req, res) => {
  res.status(200).json('DB loaded');
});

route.use(displayRoutes);

export default route;
