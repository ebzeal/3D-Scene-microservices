import { Router } from 'express';
import IdentityController from '../controllers/identityController';

import AccessMiddleware from '../middlewares/accessMiddleware';

const { authoriseUser } = AccessMiddleware;

const identityRoutes = Router();
const {
  fetchUser
} = IdentityController;

identityRoutes.get('/user/:id', authoriseUser, fetchUser);

export default identityRoutes;
