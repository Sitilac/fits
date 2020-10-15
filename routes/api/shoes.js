let express = require('express');
let router = express.Router();
let shoesCtrl = require('../../controllers/api/shoes');

router.get('/',shoesCtrl.index);
router.get('/:id',shoesCtrl.show);
router.post('/',shoesCtrl.create);
router.delete('/:id',shoesCtrl.delete);
router.put('/:id',shoesCtrl.update);



module.exports = router;
