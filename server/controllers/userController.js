import User from '../models/User.js';

export const getUsers = async (req, res) => {
    try {
        const userList = await User.find();
        console.log(userList);

        res.status(200).json(userList);

    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createUser = async (req, res) => {
    const user = req.body;
    const newUser = new User(user);
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json(error);
    }
}