import { Router } from 'express';
import UserController from '../controllers/usersController';

const userRoutes = Router();
const {
  createUser, loginUser
} = UserController;

userRoutes.post('/user', createUser);
userRoutes.post('/user/login', loginUser);

export default userRoutes;
