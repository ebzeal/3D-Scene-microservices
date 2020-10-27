import { Router } from 'express';
import AuthController from '../controllers/authController';

const authRoutes = Router();
const {
  createUser, loginUser
} = AuthController;

authRoutes.post('/user', createUser);
authRoutes.post('/user/login', loginUser);

export default authRoutes;
