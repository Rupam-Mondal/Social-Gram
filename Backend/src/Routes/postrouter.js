import express from 'express'
import upload from '../config/multerConfig.js';
import { getAllpost, createPost } from '../controllers/postController.js';

const postrouter = express.Router();

postrouter.post('/' , upload.single('image') , createPost);
postrouter.get('/', getAllpost);

export default postrouter;