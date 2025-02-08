const mongoose = require("mongoose");

const detailSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: { type: String, enum: ["user", "official", "admin"], required: true }
});

const detailModel = mongoose.model("detail", detailSchema);

module.exports = detailModel;
