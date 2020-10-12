let express = require('express');
let router = express.Router();
let outfitCtrl = require('../../controllers/api/fits');


router.get('/index', outfitCtrl.index);

module.exports = router;
