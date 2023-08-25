const express = require('express');
const globalMiddlewares = require('../authentication/middlewares/global.middleware');
const router = express.Router();
const controller = require('./items.controller');

// APPLYING AUTH TO THE ITEMS ROUTER
router.use(globalMiddlewares.apiKeyAuth)


// Create item
router.post('/', globalMiddlewares.checkAdmin, controller.createNewItem);

// Get all items
router.get('/', controller.getAllItems);

// Get one item
router.get('/:id', controller.getSingleItem);

// Update item
router.patch('/:id', globalMiddlewares.checkAdmin, controller.updateItem);

// Delete item
router.delete('/:id', globalMiddlewares.checkAdmin, controller.deleteItem);


module.exports = router;