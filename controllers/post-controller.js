import axios from "axios";
import postsDao from './Mongoose/posts/posts-dao.js';


const postController = (app) => {
    app.get('/api/posts', findAllPosts);
    app.get('/api/posts/:pid', findPostById);
    app.put('/api/posts/:pid', updatePost);

    app.post('/api/posts', createPost)
}


const createPost = async (req, res) => {
    const newPost = req.body;
    const insertedPost = await postsDao.createPost(newPost);
    res.json(insertedPost);
}

const updatePost = async (req, res) => {
    const postId = req.params.pid;
    const updatedPost = req.body;

    const status = await postsDao.updatePost(postId, updatedPost);
    res.send(status);
}
 


const findAllPosts = async (req, res) => {
    const posts = await postsDao.findAllPosts();
    res.json(posts);
}

const findPostById = async (req, res) => {
    const postId = req.params.pid;
    const post = await postsDao.findPostById(postId);
    res.json(post);
}

export default postController;