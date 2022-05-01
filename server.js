import express from 'express';
import cors from 'cors';

import helloController from './controllers/hello-controller.js';
import postController from './controllers/post-controller.js';
import userController from './controllers/user-controller.js';

const app = express();
app.use(cors());
app.use(express.json());

helloController(app);
userController(app);
postController(app);
app.listen(process.env.PORT || 4000);