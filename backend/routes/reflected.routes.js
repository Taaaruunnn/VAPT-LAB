const express = require("express");

const router = express.Router();

const { search } = require("../controllers/reflected.controller");

router.get("/search", search);

module.exports = router;