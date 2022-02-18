const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    full_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: [{ type: String, default: "customer" }]

}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("user", userSchema)