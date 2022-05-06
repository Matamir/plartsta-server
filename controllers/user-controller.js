import usersDao from "./Mongoose/users/users-dao.js";

const userController = (app) => {
    app.get('/api/users', findAllUsers);
    app.get('/api/users/:uid', findUserById);

    app.get('/api/users/credentials/:user/:pass', findUserByCredentials);
    app.get('/api/users/username/:user', findUserByUsername);

    app.post('/api/users', createUser);
    app.delete('/api/users/:uid', deleteUser);
    app.put('/api/users/:uid', updateUser);
}

const createUser = async (req, res) => {
    const newUser = req.body;
    const insertedUser = await usersDao.createUser(newUser);
    res.json(insertedUser);
}

const updateUser = async (req, res) => {
    const userId = req.params.uid;
    const updatedUser = req.body;

    const status = await usersDao.updateUser(userId, updatedUser);
    res.send(status);
}


const deleteUser = async (req, res) => {
    const userId = req.params.uid;
    const status = await usersDao.deleteUser(userId);
    res.send(status);
}


const findUserByCredentials = async (req, res) => {
    const username = req.params.user;
    const password = req.params.pass;
    const user = await usersDao.findUserByCredentials(username, password);
    res.json(user);
}


const findUserByUsername = async (req, res) => {
    const username = req.params.user;
    const user = await usersDao.findUserByUsername(username);
    res.json(user);
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

export default userController;