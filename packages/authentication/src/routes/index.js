import { Router } from 'express';
import authRoutes from './auth';

const route = Router();

route.get('/', (req, res) => {
  res.status(200).json('DB loaded');
});

route.use(authRoutes);

export default route;
