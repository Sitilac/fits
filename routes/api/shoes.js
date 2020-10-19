let express = require('express');
let router = express.Router();
let shoesCtrl = require('../../controllers/api/shoes');

router.get('/user/:id',shoesCtrl.index);
router.get('/:id',shoesCtrl.show);
router.post('/',checkAuth,shoesCtrl.create);
router.delete('/:id',checkAuth,shoesCtrl.delete);
router.put('/:id',checkAuth,shoesCtrl.update);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
