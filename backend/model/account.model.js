var mongoose = require('mongoose');

var AccountSchema = new mongoose.Schema(
    {
        username: String,
        password: String,
        email: String
    },
    {
        versionKey: false
    }
);

module.exports = mongoose.model('Account', AccountSchema);