const express = require("express");

const router = express.Router();

const {
  login,logout,me,register
} = require("../controllers/auth.controller");
router.post("/logout", logout);
router.post("/login", login);
router.get("/me", me);
router.post("/register", register);

module.exports = router;