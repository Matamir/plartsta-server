import axios from "axios";
import items from "./posts.js"
let posts = items;

// const POSTS_API = 'http://localhost:4000/api/posts'

// export const findAllPosts = async () => {
//     const res = await axios.get(POSTS_API);
//     const posts = res.data;
//     return posts;
// }

const IG_API = 'https://graph.instagram.com/7509095509130541/media?fields=id,caption&access_token='
var api_key = process.env.insta_key;
const res = await axios.get(IG_API.concat(api_key));
const posts_raw = res.data;


const postController = (app) => {
    app.get('/api/posts', findAllPosts);
    app.get('/api/posts/:uid', findPostById);

}


const findAllPosts = (req, res) => {
    res.json(post_raw);
}

const findPostById = (req, res) => {
    const postId = req.params.uid;
    const post = posts.find(p => p.id === postId);
    res.json
}

export default postController;