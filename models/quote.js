const mongoose = require("mongoose");

const quoteSchema = mongoose.Schema({
    quote: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        maxlength: 128,
    }
});

module.exports = mongoose.model("quote", quoteSchema);