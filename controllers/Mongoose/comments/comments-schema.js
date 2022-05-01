import mongoose from "mongoose";
const schema = mongoose.Schema({
    pid: String,
    uid: String,
    text:String,
}, { collection: 'comments'});
export default schema;