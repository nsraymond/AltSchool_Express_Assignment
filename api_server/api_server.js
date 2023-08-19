const express = require('express');
const app = express();

const PORT = 8000;

// IMPORTING ITEMS ROUTER
const itemsRouter = require('./api.router');

// BODYPARSER
app.use(express.json());

app.use('/items', itemsRouter);

// RANDOM URL
app.get('*', (req, res) => {
    res.status(404).json({
        error: 'Page not found'
    })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
