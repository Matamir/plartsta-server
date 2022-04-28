import items from "./posts.js"
let posts = items;

const postController = (app) => {
    app.get('/api/posts', findAllPosts);
    app.get('/api/posts/:uid', findPostById);
}

const findAllPosts = (req, res) => {
    res.json(posts);
}

const findPostById = (req, res) => {
    const postId = req.params.uid;
    const post = posts.find(p => p.id === postId);
    res.json
}

export default postController;