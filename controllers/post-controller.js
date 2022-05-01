import axios from "axios";
import postsDao from './Mongoose/posts/posts-dao.js';


const postController = (app) => {
    app.get('/api/posts', findAllPosts);
    app.get('/api/posts/:uid', findPostById);
    app.put('/api/posts/:uid', updatePost);

}


const updatePost = async (req, res) => {
    const postId = req.params.uid;
    const updatedPost = req.body;

    const status = await usersDao.updateUser(postId, updatedPost);
    res.send(status);
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