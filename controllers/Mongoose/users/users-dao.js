import usersModel from './users-model.js';
export const findAllUsers = () => usersModel.find();
export const findUsersById = (id) => usersModel.findById(id);
export const createUser = (user) => usersModel.create(user);
export const deleteUser = (uid) => usersModel.deleteOne({_id:uid});
export const updateUser = (uid, user) => usersModel.updateOne({_id:uid},{$set:user});

export default {findAllUsers, findUsersById, createUser, deleteUser, updateUser};