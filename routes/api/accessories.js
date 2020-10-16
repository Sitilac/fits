let express = require('express');
let router = express.Router();
let accessoriesCtrl = require('../../controllers/api/accessories');

router.get('/user/:id',accessoriesCtrl.index);
router.get('/:id',accessoriesCtrl.show);
router.post('/',accessoriesCtrl.create);
router.delete('/:id',accessoriesCtrl.delete);
router.put('/:id',accessoriesCtrl.update);


module.exports = router;
