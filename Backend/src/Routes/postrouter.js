import express from 'express'
import upload from '../config/multerConfig.js';
import { getAllpost, createPost, deletepost, updatepost, likePostController } from '../controllers/postController.js';
import { isAuthenticate } from '../Middlewares/authMiddleware.js';
import commentRouter from './Commentsrouter.js';

const postrouter = express.Router();



postrouter.post('/', isAuthenticate, upload.single('image') , createPost);
postrouter.get('/', getAllpost);
postrouter.delete('/:id', isAuthenticate, deletepost);
postrouter.put('/:id' , isAuthenticate, upload.single('image') , updatepost);
postrouter.post('/likes/:id', likePostController)
postrouter.use('/comment' , commentRouter);

export default postrouter;