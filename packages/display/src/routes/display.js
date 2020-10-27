import { Router } from 'express';
import displayController from '../controllers/displayController';

import AccessMiddleware from '../middlewares/accessMiddleware';

const { authoriseUser } = AccessMiddleware;

const displayRoutes = Router();
const {
  fetchUser
} = displayController;

displayRoutes.get('/shape/:shapeName', authoriseUser, fetchUser);

export default displayRoutes;
