let express = require('express');
let router = express.Router();
let shoesCtrl = require('../../controllers/api/shoes');

router.post('/',shoesCtrl.create);


module.exports = router;
