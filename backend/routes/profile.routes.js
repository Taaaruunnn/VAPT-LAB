const express = require("express");

const router = express.Router();

const {
  profile
} = require("../controllers/profile.controller");

router.get("/", profile);

module.exports = router;