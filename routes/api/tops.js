let express = require('express');
let router = express.Router();
let topsCtrl = require('../../controllers/api/tops');

router.get('/',topsCtrl.index);
router.post('/',topsCtrl.create);

module.exports = router;
