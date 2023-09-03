const Item = require('../models/itemModel');


// add product
const addItem = (async (req , res) => {
    let emptyField = [];

    if (!name){
        emptyField.push('title');
    }
    if (!description){
        emptyField.push('description');
    }
    if (!category){
        emptyField.push ('category');
    }
    if (!price){
        emptyField.push('price');
    }
    if (!image){
        emptyField.push('image');
    }

    if (emptyField.length > 0){
        res.status(404).json({error : 'All fields must be filled ', emptyField});
    }

    const {name , image , category , price , description} = req.body;
    try {
        const item = await Item.create ({name , image , category , price , description});
        res.status(200).json(item);
        console.log (req.body);
    }
    catch (error){
        res.status(401).json(error.messsage);
    }
})

// get all products
const getItems =  ( async (req , res) => {  
    try {
        const item = await Item.find();
        res.status(200).json(item);
    }
    catch(error){
        res.status(401).json({messsage : 'Query failed'});
    }
})
// get single product

// delete product

// edit product

module.exports = {getItems , addItem}