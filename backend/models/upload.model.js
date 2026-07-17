const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({

    filename: String,

    originalName: String,

    path: String,

    mimetype: String,

    size: Number,

    uploadedBy: String,

    uploadedAt: {

        type: Date,

        default: Date.now

    }

});

module.exports = mongoose.model("Upload", uploadSchema);