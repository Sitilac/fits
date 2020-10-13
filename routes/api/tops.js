let express = require('express');
let router = express.Router();
let topsCtrl = require('../../controllers/api/tops');

router.post('/',topsCtrl.create);

module.exports = router;
