import usersDao from "./Mongoose/users/users-dao.js";

const userController = (app) => {
    app.get('/api/users', findAllUsers);
    app.get('/api/users/:uid', findUserById);
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

export default userController;