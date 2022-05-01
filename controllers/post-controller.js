import axios from "axios";
import postsDao from './Mongoose/posts/posts-dao.js';


const postController = (app) => {
    app.get('/api/posts', findAllPosts);
    app.get('/api/posts/:uid', findPostById);
}


const findAllPosts = async (req, res) => {
    const posts = await postsDao.findAllPosts();
    res.json(posts);
}

const findPostById = async (req, res) => {
    const postId = req.params.uid;
    const post = await postsDao.findPostById(postId);
    res.json
}

export default postController;