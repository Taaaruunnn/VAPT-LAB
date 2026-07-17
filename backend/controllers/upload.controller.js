const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Upload = require("../models/upload.model");
if (!fs.existsSync("uploads")) {

    fs.mkdirSync("uploads");

}
const storage = multer.diskStorage({

    destination(req, file, cb) {

        cb(null, "uploads/");
    },
    // ======================================
// VULNERABLE LAB
// Unrestricted File Upload
// Original filename is preserved.
// This can lead to filename collisions
// and dangerous file uploads.
// ======================================



    filename(req, file, cb) {

        cb(null, file.originalname);

    }

});
// ======================================
// VULNERABLE LAB
// Weak Blocklist
// Uses a deny-list instead of an allow-list.
// Attackers may bypass this restriction.
// ======================================
const blocked = [

    ".exe",

    ".bat"

];
const fileFilter = (req, file, cb) => {

    const ext = path.extname(file.originalname).toLowerCase();

    if (blocked.includes(ext)) {

        return cb(new Error("Blocked file"));

    }

    cb(null, true);

};
const upload = multer({

    storage,

    fileFilter

});
const uploadFile = async (req, res) => {

    if (!req.file) {

        return res.status(400).json({

            success: false,

            message: "No file uploaded"

        });

    }

    const uploaded = await Upload.create({

        filename: req.file.filename,

        originalName: req.file.originalname,

        path: req.file.path,

        mimetype: req.file.mimetype,

        size: req.file.size,

        uploadedBy: req.session.user?.email

    });

    res.json({

        success: true,

        file: uploaded

    });

};
const getUploads = async (req, res) => {

    const uploads = await Upload.find();

    res.json(uploads);

};


const deleteUpload = async (req, res) => {

    const file = await Upload.findById(req.params.id);

    if (!file) {

        return res.sendStatus(404);

    }

    if (fs.existsSync(file.path)) {

    fs.unlinkSync(file.path);

}

    await file.deleteOne();

    res.json({

        success: true

    });

};
module.exports = {

    upload,

    uploadFile,

    getUploads,

    deleteUpload

};