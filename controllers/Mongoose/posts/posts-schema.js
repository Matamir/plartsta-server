import mongoose from "mongoose";
const schema = mongoose.Schema({
    pid:String,
    username: String,
    caption: String,
    likes: Number,
    timestamp: String,
    image: String,
    comments: [{
        id:String,
    }],
}, { collection: 'posts' });
export default schema;