import commentsModel from './comments-model.js';
export const findAllComments = () => commentsModel.find();
export const findCommentById = (id) => commentsModel.findById(id);

export const findCommentsByPostId = (id) => commentsModel.findOne({pid:id});
export const findCommentsByUserId = (id) => commentsModel.findOne({uid:id});

export const createComment = (comment) => commentsModel.create(comment);
export const deleteComment = (cid) => commentsModel.deleteOne({_id:cid});
export const updateComment = (cid, comment) => commentsModel.updateOne({_id:cid},{$set:comment});

export default {findAllComments, findCommentById, findCommentsByPostId, findCommentsByUserId, createComment, deleteComment, updateComment};