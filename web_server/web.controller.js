// IMPORTING MODULES
const fs = require('fs').promises;
const path = require('path');

// HANDLING HOMEPAGE
async function homePageHandler(req, res){
    try{
        const homePagePath = path.join(__dirname, 'public', 'index.html');
        res.status(200).sendFile(homePagePath);
    } catch(error){
        res.json({
            error: 'An error occurred'
        })
    }
}

// HANDLING ERROR PAGE
async function errorPageHandler(req, res) {
    try{
        const errorPagePath = await path.join(__dirname, 'public', '404.html');
        res.status(404).sendFile(errorPagePath);
    } catch(error){
        res.json({
            error: 'An error occurred'
        })
    }
}



module.exports = {
    homePageHandler,
    errorPageHandler,
}