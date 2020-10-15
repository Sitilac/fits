let express = require('express');
let router = express.Router();
let bottomsCtrl = require('../../controllers/api/bottoms');


router.get('/',bottomsCtrl.index);
router.get('/:id',bottomsCtrl.show);
router.post('/',bottomsCtrl.create);
router.delete('/:id',bottomsCtrl.delete);
router.put('/:id',bottomsCtrl.update);

module.exports = router;
