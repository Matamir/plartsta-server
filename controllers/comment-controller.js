import commentsDao from "./Mongoose/comments/comments-dao.js";

const commentsController = (app) => {
    app.get('/api/comments', findAllComments);
    app.get('/api/comments/cid/:cid', findCommentsById);
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

const updateUser = async (req, res) => {
    const userId = req.params.uid;
    const updatedUser = req.body;

    const status = await usersDao.updateUser(userId, updateUser);
    res.send(status);
}


const deleteUser = async (req, res) => {
    const userId = req.params.uid;
    const status = await usersDao.deleteUser(userId);
    res.send(status);
}



const findUserById = async (req, res) => {
    const userId = req.params.uid;
    const user = await usersDao.findUsersById(userId);
    res.json(user);
}

const findAllUsers = async (req, res) => {
    const users = await usersDao.findAllUsers();
    res.json(users);
}

export default commentsController;