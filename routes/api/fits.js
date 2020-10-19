let express = require('express');
let router = express.Router();
let fitCtrl = require('../../controllers/api/fits');


router.get('/user/:id',fitCtrl.index);
router.get('/:id',fitCtrl.show);
router.post('/',checkAuth,fitCtrl.create);
router.delete('/:id',checkAuth,fitCtrl.delete);
router.put('/:id',checkAuth,fitCtrl.update);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
