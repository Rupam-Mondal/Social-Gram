import express from 'express';
import { connectDB } from './config/dbConfig.js';

const port = 3000;

const app = express();

app.post('/', (req, res) => {
    return res.json({ msg: "This is /" });
});

app.get('/ping' , (req , res) => {
    return res.json({msg:"This is /ping"});
});

app.listen(port , () => {
    console.log("Server connected");
    connectDB();
});