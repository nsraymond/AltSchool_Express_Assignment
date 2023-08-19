const express = require('express');
const router = express.Router();

const { 
    createNewItem, 
    getAllItems, 
    getSingleItem, 
    updateItem, 
    deleteItem
} = require('./api.controller');


// Create item
router.post('/', createNewItem);

// Get all items
router.get('/', getAllItems);

// Get one item
router.get('/:id', getSingleItem);

// Update item
router.patch('/:id', updateItem);

// Delete item
router.delete('/:id', deleteItem);


module.exports = router;