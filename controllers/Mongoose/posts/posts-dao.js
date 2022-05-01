import postsModel from "./posts-model.js";
export const findAllPosts = () => postsModel.find();
export const findPostById = (id) => postsModel.findById(id);
export const updatePost = (pid, post) => postsModel.updateOne({_id:pid},{$set:post});
export default {findAllPosts, findPostById, updatePost};