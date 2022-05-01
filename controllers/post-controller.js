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
var api_key = process.env.insta_key || 'IGQVJWbmdYWHJhM3l5eU11VDBJR3R1andaSzdZAWDN5bTVYUlZAMR3RtR1hLYTE2alFRdUREdk9KY0VxazRMRHRTSG5LZA0tPa1RydEs5dUI2Q3lDNnhNVlo3dWxlYnBreFpfMDZA0V09R';

const raw_posts = async () => {
    const res = await axios.get(IG_API.concat(api_key.toString()));
    const post_raw = res.data.data;
    return post_raw
}

const postController = (app) => {
    app.get('/api/posts', findAllPosts);
    app.get('/api/posts/:uid', findPostById);
}


const findAllPosts = async (req, res) => {
    posts = await raw_posts()
    res.json(posts);
}

const findPostById = (req, res) => {
    const postId = req.params.uid;
    const post = posts.find(p => p.id === postId);
    res.json
}

export default postController;