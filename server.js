import express from 'express';
import helloController from './controllers/hello-controller.js';
import postController from './controllers/post-controller.js';

const app = express();


helloController(app);
postController(app);
app.listen(4000);