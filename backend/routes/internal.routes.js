const express = require("express");

const router = express.Router();

const { getSecret } = require("../controllers/internal.controller");

router.get("/secret", getSecret);

module.exports = router;