var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema   = new Schema({
    title: String,
    price: String,
   
});

module.exports = mongoose.model('Order', OrderSchema);
