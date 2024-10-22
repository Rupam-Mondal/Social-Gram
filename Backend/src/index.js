import express from 'express';
import { connectDB } from './config/dbConfig.js';
import postrouter from './Routes/postrouter.js';
import cors from 'cors';
import UserRouter from './Routes/userRouter.js';


const port = 3000;

const app = express();

app.use(express.json());
app.use(express.text());

app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST'], 
    credentials: true,
}));

app.post('/', (req, res) => {
    return res.json({ msg: "This is /" });
});

app.get('/ping' , (req , res) => {
    console.log(req.body)
    return res.json({msg:"This is /ping"});
});

app.use('/post' , postrouter);
app.use('/user' , UserRouter);

app.listen(port , () => {
    console.log("Server connected");
    connectDB();
});