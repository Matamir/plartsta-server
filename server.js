import express from 'express';
import cors from 'cors';

import helloController from './controllers/hello-controller.js';
import postController from './controllers/post-controller.js';
import userController from './controllers/user-controller.js';

import mongoose from 'mongoose';

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb+srv://Matamir:Handprint9.Ardently.Goofball.Hardware.Lens@cluster0.zhzss.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(CONNECTION_STRING)


const app = express();
app.use(cors());
app.use(express.json());

helloController(app);
userController(app);
postController(app);
app.listen(process.env.PORT || 4000);