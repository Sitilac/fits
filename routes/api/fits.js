let express = require('express');
let router = express.Router();
let fitCtrl = require('../../controllers/api/fits');


router.get('/user/:id',fitCtrl.index);
router.get('/:id',fitCtrl.show);
router.post('/',fitCtrl.create);
router.delete('/:id',fitCtrl.delete);
router.put('/:id',fitCtrl.update);

module.exports = router;
