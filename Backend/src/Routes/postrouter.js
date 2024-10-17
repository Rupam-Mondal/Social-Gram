import express from 'express'
import upload from '../config/multerConfig.js';
import { getAllpost, createPost, deletepost } from '../controllers/postController.js';

const postrouter = express.Router();

postrouter.post('/' , upload.single('image') , createPost);
postrouter.get('/', getAllpost);
postrouter.delete('/:id' , deletepost);

export default postrouter;