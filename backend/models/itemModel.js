const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = Schema({
    name : {
        type : String,
        required : true
    },
    // image : {
    //     type : String,
    //     required : true
    // },
    category : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        requred : true
    },
    description: {
        type : String,
        required : true
    }
} , {timeStamp : true});

const Item = mongoose.model('Item' , itemSchema);
module.exports = Item ;