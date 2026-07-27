const express = require('express');
const router = express.Router();
const {fetchURL} = require('../controllers/ssrf.controller');
router.post('/fetch', fetchURL);
module.exports = router;