let express = require('express');
let router = express.Router();
let bottomsCtrl = require('../../controllers/api/bottoms');

router.post('/',bottomsCtrl.create);

module.exports = router;