import express from 'express';
import { connectDB } from './config/dbConfig.js';
import upload from './config/multerConfig.js';
import { createPost } from './controllers/postController.js';

const port = 3000;

const app = express();

app.use(express.json());
app.use(express.text());

app.post('/', (req, res) => {
    return res.json({ msg: "This is /" });
});

app.get('/ping' , (req , res) => {
    console.log(req.body)
    return res.json({msg:"This is /ping"});
});

app.post('/posts' ,upload.single('image') ,  createPost);

app.listen(port , () => {
    console.log("Server connected");
    connectDB();
});