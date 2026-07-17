const express = require("express");

const router = express.Router();

const {

    upload,

    uploadFile,

    getUploads,

    deleteUpload

} = require("../controllers/upload.controller");

// ======================================
// VULNERABLE LAB
// Unrestricted File Upload
// ======================================

router.post(

    "/",

    upload.single("file"),

    uploadFile

);

// ======================================
// Get All Uploaded Files
// ======================================

router.get(

    "/",

    getUploads

);

// ======================================
// Delete Uploaded File
// ======================================

router.delete(

    "/:id",

    deleteUpload

);

module.exports = router;