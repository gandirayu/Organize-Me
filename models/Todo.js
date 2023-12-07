const mongoose = require("mongoose");
const TodoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true,
    },
    deadline: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Todo", TodoSchema);