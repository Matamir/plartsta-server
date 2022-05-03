import mongoose from "mongoose";
import schema from "./posts-schema.js";
const postsModel = mongoose.model('PostModel', schema);
export default postsModel;
