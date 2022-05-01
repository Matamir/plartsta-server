import mongoose from "mongoose";
const schema = mongoose.Schema({
    username: String,
    password: String,
    likes: [{
        id:String,
    }],
    following:[{
        id:String,
    }],
    bio: String,
    pfp: String,
    userType: {
        type: String,
        enum: ['user','admin'],
        default: 'user',
    },
}, {collection: 'users'});
export default schema;