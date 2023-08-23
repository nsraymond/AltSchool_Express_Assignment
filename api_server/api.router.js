const express = require('express');
const router = express.Router();
const controller = require('./api.controller');


// Create item
router.post('/', controller.createNewItem);

// Get all items
router.get('/', controller.getAllItems);

// Get one item
router.get('/:id', controller.getSingleItem);

// Update item
router.patch('/:id', controller.updateItem);

// Delete item
router.delete('/:id', controller.deleteItem);


module.exports = router;