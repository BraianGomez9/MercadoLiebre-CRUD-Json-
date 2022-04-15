var express = require('express');
var router = express.Router();
const controllerMvc = require('../controllers/mainController')

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname +'/index.html'))




module.exports = router;
