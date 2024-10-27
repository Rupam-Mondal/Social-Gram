import express from 'express'
import { isAuthenticate } from '../Middlewares/authMiddleware.js';
import { createComment, createNestedComment } from '../controllers/commentController.js';

const commentRouter = express.Router();

commentRouter.post('/:postId/:userId', isAuthenticate, createComment);
commentRouter.post('/comment/:commentId/:userId' , isAuthenticate , createNestedComment);

export default commentRouter;