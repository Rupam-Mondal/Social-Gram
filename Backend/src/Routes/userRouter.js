import express from 'express'
import { signup } from '../controllers/userController.js';

const UserRouter = express.Router();

UserRouter.post('/signup' , signup);

export default UserRouter;