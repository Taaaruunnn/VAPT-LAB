const express = require("express");

const router = express.Router();

const {

    getComments,
    addComment,
    deleteComment

} = require("../controllers/comment.controller");

router.get("/", getComments);
router.delete("/:id", deleteComment);

router.post("/", addComment);

module.exports = router;