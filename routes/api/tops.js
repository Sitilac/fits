let express = require('express');
let router = express.Router();
let topsCtrl = require('../../controllers/api/tops');

router.get('/',topsCtrl.index);
router.get('/:id',topsCtrl.show);
router.post('/',topsCtrl.create);
router.delete('/:id',topsCtrl.delete);
router.put('/:id',topsCtrl.update);

module.exports = router;
