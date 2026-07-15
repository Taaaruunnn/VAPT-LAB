const User = require("../models/user.model");

const getUsers = async (req, res) => {

    const users = await User.find().select("-password");

    res.json(users);

};

const getUserById = async (req, res) => {

    const { id } = req.params;

    const user = await User.findById(id).select("-password");

    if (!user) {

        return res.status(404).json({

            success: false,

            message: "User not found"

        });

    }

    // ================================
    // INTENTIONALLY VULNERABLE (IDOR)
    // No authorization check
    // ================================

    res.json(user);

};

module.exports = {

    getUsers,

    getUserById

};