import commentsDao from './Mongoose/comments/comments-dao.js';

const commentsController = (app) => {
    app.get('/api/comments', findAllComments);
    app.get('/api/comments/cid/:cid', findCommentById);
    app.get('/api/comments/pid/:pid', findCommentsByPostId);
    app.get('/api/comments/uid/:uid', findCommentsByUserId);
    
    app.post('/api/comments', createComment);
    app.delete('/api/comments/:cid', deleteComment);
    app.put('/api/comments/:cid', updateComment);
}

const createComment = async (req, res) => {
    const newComment = req.body;
    const insertedComment = await commentsDao.createComment(newComment);
    res.json(insertedComment);
}

const updateComment = async (req, res) => {
    const commentId = req.params.uid;
    const updatedComment = req.body;

    const status = await commentsDao.updateComment(commentId, updatedComment);
    res.send(status);
}


const deleteComment = async (req, res) => {
    const commentId = req.params.uid;
    const status = await commentsDao.deleteComment(commentId);
    res.send(status);
}


const findCommentsByPostId = async (req, res) => {
    const postId = req.params.uid;
    const comments = await commentsDao.findCommentsByPostId(postId);
    res.json(comments);
}

const findCommentsByUserId = async (req, res) => {
    const userId = req.params.uid;
    const comments = await commentsDao.findCommentsByUserId(userId);
    res.json(comments);
}

const findCommentById = async (req, res) => {
    const commentId = req.params.uid;
    const comment = await commentsDao.findCommentById(commentId);
    res.json(comment);
}

const findAllComments = async (req, res) => {
    const comments = await commentsDao.findAllComments();
    res.json(comments);
}

export default commentsController;