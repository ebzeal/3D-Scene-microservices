import { Router } from 'express';
import userRoutes from './users';

const route = Router();

route.get('/', (req, res) => {
  res.status(200).json('DB loaded');
});

route.use(userRoutes);

export default route;
