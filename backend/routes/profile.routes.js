const express = require("express");

const router = express.Router();

const {
  profile,
  updateName
} = require("../controllers/profile.controller");

router.get("/", profile);
router.post(
    "/update-name",
    updateName
);
module.exports = router;