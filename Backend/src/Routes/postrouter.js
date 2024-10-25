import express from 'express'
import upload from '../config/multerConfig.js';
import { getAllpost, createPost, deletepost, updatepost } from '../controllers/postController.js';
import { isAuthenticate } from '../Middlewares/authMiddleware.js';

const postrouter = express.Router();

postrouter.post('/', isAuthenticate, upload.single('image') , createPost);
postrouter.get('/', getAllpost);
postrouter.delete('/:id' , deletepost);
postrouter.put('/:id' , upload.single('image') , updatepost);

export default postrouter;