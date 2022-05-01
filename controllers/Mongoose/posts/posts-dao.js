import postsModel from "./posts-model.js";
export const findAllPosts = () => postsModel.find();
export const findPostById = (id) => postsModel.findById(id);
export default {findAllPosts, findPostById};