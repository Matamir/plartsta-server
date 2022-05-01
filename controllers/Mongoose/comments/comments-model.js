import mongoose from "mongoose";
import schema from "./comments-schema.js";
const commentsModel = mongoose.model('CommentModel', schema);
export default commentsModel;