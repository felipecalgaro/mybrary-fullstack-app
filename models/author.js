const mongoose = require('mongoose');

const autorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Author', autorSchema)