import express from 'express'
import { likeCommentController, likePostController } from '../controllers/likeController.js';
import { isAuthenticate } from '../Middlewares/authMiddleware.js';

const likeRouter = express.Router();

likeRouter.post('/:id' , isAuthenticate ,  likePostController);
likeRouter.post('/comment/:id', isAuthenticate, likeCommentController);


export default likeRouter;