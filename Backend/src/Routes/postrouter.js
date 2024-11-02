import express from 'express'
import upload from '../config/multerConfig.js';
import { getAllpost, createPost, deletepost, updatepost, getDetailsOfPost, } from '../controllers/postController.js';
import { isAuthenticate } from '../Middlewares/authMiddleware.js';
import commentRouter from './Commentsrouter.js';
import likeRouter from './likeRouter.js';

const postrouter = express.Router();



postrouter.post('/', isAuthenticate, upload.single('image') , createPost);
postrouter.get('/', getAllpost);
postrouter.delete('/:id', isAuthenticate, deletepost);
postrouter.put('/:id' , isAuthenticate, upload.single('image') , updatepost);
postrouter.post('/:id' , isAuthenticate , getDetailsOfPost);
postrouter.use('/comment' , commentRouter);
postrouter.use('/like', likeRouter);

export default postrouter;