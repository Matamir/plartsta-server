import commentsModel from './comments-model.js';
export const findAllComments = () => commentsModel.find();
export const findCommentsById = (id) => commentsModel.findById(id);

export const findCommentsByPostId = (id) => commentsModel.find({pid:id});
export const findCommentsByUserId = (id) => commentsModel.find({uid:id});

export const createComment = (comment) => commentsModel.create(comment);
export const deleteComment = (cid) => commentsModel.deleteOne({_id:cid});
export const updateComment = (cid, comment) => commentsModel.updateOne({_id:cid},{$set:comment});

export default {findAllComments, findCommentsById, findCommentsByPostId, findCommentsByUserId, createComment, deleteComment, updateComment};