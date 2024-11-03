import express from 'express'
import { isAuthenticate } from '../Middlewares/authMiddleware.js';
import { createComment, createNestedComment, getDetailsComment } from '../controllers/commentController.js';

const commentRouter = express.Router();

commentRouter.post('/:postId', isAuthenticate, createComment);
commentRouter.post('/comment/:commentId' , isAuthenticate , createNestedComment);
commentRouter.post('/commentdetails/:id' , getDetailsComment);

export default commentRouter;