import express from 'express'
import { signin, signup } from '../controllers/userController.js';

const UserRouter = express.Router();

UserRouter.post('/signup' , signup);
UserRouter.post('/signin', signin);

export default UserRouter;