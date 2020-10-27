import { Router } from 'express';
import identityRoutes from './identity';

const route = Router();

route.get('/', (req, res) => {
  res.status(200).json('DB loaded');
});

route.use(identityRoutes);

export default route;
