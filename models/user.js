var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    firsName: String,
    lastName: String,
    email: String,
    password: String
});

module.exports = mongoose.model('User', UserSchema);
