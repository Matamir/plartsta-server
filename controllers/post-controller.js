import axios from "axios";
import postsDao from './Mongoose/posts/posts-dao.js';

const IG_API = 'https://graph.instagram.com/7509095509130541/media?fields=id,caption&access_token='
var api_key = process.env.insta_key || 'IGQVJWbmdYWHJhM3l5eU11VDBJR3R1andaSzdZAWDN5bTVYUlZAMR3RtR1hLYTE2alFRdUREdk9KY0VxazRMRHRTSG5LZA0tPa1RydEs5dUI2Q3lDNnhNVlo3dWxlYnBreFpfMDZA0V09R';

const raw_posts = async () => {
    let res = await axios.get(IG_API.concat(api_key.toString()));
    let posts_raw = res.data.data;


    let next = res.data.paging.next;
    while (next !== undefined) {
        res = await axios.get(next);
        posts_raw = [...posts_raw, ...res.data.data]
        next = res.data.paging.next;
    }

    return posts_raw;
}

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