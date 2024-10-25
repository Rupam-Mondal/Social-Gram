import express from 'express';
import { connectDB } from './config/dbConfig.js';
import postrouter from './Routes/postrouter.js';
import cors from 'cors';
import UserRouter from './Routes/userRouter.js';
import { isAuthenticate } from './Middlewares/authMiddleware.js';
import swaggerui from 'swagger-ui-express';
import swaggerjsdoc from 'swagger-jsdoc';


const port = 3000;

const options = {
    definition : {
        info: {
            title: "Image gram api",
            version: '0.1.0',
            description: "This is a simple social media backend made with express where user can get same experience like other social media"
        },
        servers: [
            {
                url: 'http://localhost:3000'
            }
        ]
    },
    apis:['../Routes/*.js'],
}

const swaggerdocs = swaggerjsdoc(options);
app.use('/api-docs', swaggerui.serve, swaggerui.setup(swaggerdocs))

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