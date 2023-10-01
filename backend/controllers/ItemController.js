const Item = require('../models/itemModel');


// add product
const addItem = (async (req , res) => {
    const {firstname , lastname , date_of_birth , major , generation} = req.body;
    const photo = req.file.filename;

    try {
        const item = await Item.create ({firstname , lastname , date_of_birth , major , generation , photo});
        res.status(200).json(item);
        console.log (req.body);
    }
    catch (error){
        res.status(401).json(error.message);
    }
})

// get all products
const getItems =  ( async (req , res) => {  
    try {
        const items = await Item.find().sort({ createdAt: -1 });
        res.status(200).json(items)
    }
    catch(error){
        res.status(401).json({messsage : 'Query failed'});
    }
})
// get single product
const getItem = (async (req , res) => {
    try {
        const {id} = req.params;
        const item = await Item.findById(id);
        res.status(200).json(item);
        console.log (req.body);
    }
    catch(error){
        res.status(401).json({messsage : 'Query failed'});
    }
})
// delete product
const deleteItem = (async (req , res) => {
    try{
        const {id} = req.params;
        const item = await Item.findByidAndDelete(id)
        res.status(200).json(item)
    }
    catch (error){
        res.status(401).json({message : 'Failed to delete'});
    }
})

// edit product

const editItem = (async (req , res) => {
    try {
        const {id} = req.params;
        const item = await Item.findByIdAndUpdate({_id : id} , {...req.body} , {new : true});
        res.status(200).json({message : 'Item updated' + item});
    }
    catch (error){
        res.status(401).json({message : 'Failed to update'});
    }
    
})

module.exports = {getItems , addItem , getItem , deleteItem , editItem};