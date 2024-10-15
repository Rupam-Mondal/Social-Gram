import express from 'express';
import { connectDB } from './config/dbConfig.js';
import { createPost } from './services/postService.js';
import upload from './config/multerConfig.js';

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

app.post('/posts' ,upload.single('image') ,  (req , res) => {
    console.log(req.file.path);
    return res.json({"msg":"uploaded"});
});

app.listen(port , () => {
    console.log("Server connected");
    connectDB();
});