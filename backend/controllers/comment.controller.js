const Comment = require("../models/comment.model");

const getComments = async (req, res) => {

    const comments = await Comment.find().sort({
        createdAt: -1
    });

    res.json(comments);

};

const addComment = async (req, res) => {

    const { author, content } = req.body;

    const comment = await Comment.create({

        author,

        content

    });

    res.json(comment);

};
const deleteComment = async (req, res) => {

    const { id } = req.params;

    await Comment.findByIdAndDelete(id);

    res.json({

        success: true,

        message: "Comment deleted"

    });

};

module.exports = {

    getComments,
    addComment,
    deleteComment

};