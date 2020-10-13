let express = require('express');
let router = express.Router();
let accessoriesCtrl = require('../../controllers/api/accessories');

router.post('/',accessoriesCtrl.create);


module.exports = router;
