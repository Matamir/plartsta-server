import express from 'express';
import helloController from './controllers/hello-controller.js';
import postController from './controllers/post-controller.js';
import userController from './controllers/user-controller.js';

const app = express();


helloController(app);
postController(app);
app.listen(process.env.PORT || 4000);