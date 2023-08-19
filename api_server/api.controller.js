// FAKE DATABASE
const items = require('./database/data.json');

// CREATE ITEM
function createNewItem(req, res){
    const newItem = req.body;
    items.push(newItem);
    res.status(201).json(newItem);
}

// GET ALL ITEMS || FILTER ITEMS BY SIZE
function getAllItems(req, res){
  const { size } = req.query;

  if (size) {
    const filteredItems = items.filter(item => item.size === size);
    res.json(filteredItems);
  } else {
    res.json(items);
  }
}

// GET SINGLE ITEM
function getSingleItem(req, res){
    const itemId = req.params.id;
    const item = items.find(item => item.id === itemId);
    if (item) {
      res.status(201).json(item);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  };

// UPDATE ITEM
function updateItem(req, res){
    const itemId = req.params.id;
    const updatedItem = req.body;
    const index = items.findIndex(item => item.id === itemId);
    if (index !== -1) {
      items[index] = { ...items[index], ...updatedItem };
      res.json(items[index]);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
}

// DELETE ITEM
function deleteItem(req, res){
    const itemId = req.params.id;
    const index = items.findIndex(item => item.id === itemId);
    if (index !== -1) {
      const deletedItem = items.splice(index, 1)[0];
      res.status(200).json({
        message: 'Item successfully deleted'
      });
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
}


module.exports = {
    createNewItem,
    getAllItems,
    getSingleItem,
    updateItem,
    deleteItem
}