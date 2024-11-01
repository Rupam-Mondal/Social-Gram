import express from 'express';
import { connectDB } from './config/dbConfig.js';
import postrouter from './Routes/postrouter.js';
import cors from 'cors';
import UserRouter from './Routes/userRouter.js';
import { isAuthenticate } from './Middlewares/authMiddleware.js';
import swaggerui from 'swagger-ui-express';
import swaggerjsdoc from 'swagger-jsdoc';
import { options } from './utils/Swagger.js';
import { limiter } from './Middlewares/rateLimitor.js';


const port = 3000;


const swaggerdocs = swaggerjsdoc(options);


const app = express();
app.use('/api-docs', swaggerui.serve, swaggerui.setup(swaggerdocs))

app.use(express.json());
app.use(express.text());
app.use(limiter)

app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST' , 'DELETE'], 
    credentials: true,
}));

app.post('/', (req, res) => {
    return res.json({ msg: "This is /" });
});

app.get('/ping' , isAuthenticate, (req , res) => {
    console.log(req.body)
    return res.json({msg:"This is /ping"});
});

app.use('/post' , postrouter);
app.use('/user' , UserRouter);

app.listen(port , () => {
    console.log("Server connected");
    connectDB();
});