import express from 'express'
import { isAuthenticate } from '../Middlewares/authMiddleware.js';
import { createComment } from '../controllers/commentController.js';

const commentRouter = express.Router();

commentRouter.post('/:postId/:userId', isAuthenticate, createComment)

export default commentRouter;