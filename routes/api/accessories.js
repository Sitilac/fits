let express = require('express');
let router = express.Router();
let accessoriesCtrl = require('../../controllers/api/accessories');

router.get('/',accessoriesCtrl.index);
router.post('/',accessoriesCtrl.create);


module.exports = router;
