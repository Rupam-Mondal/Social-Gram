import express from 'express'
import { likePostController } from '../controllers/likeController.js';
import { isAuthenticate } from '../Middlewares/authMiddleware.js';

const likeRouter = express.Router();

likeRouter.post('/:id' , isAuthenticate ,  likePostController);


export default likeRouter;