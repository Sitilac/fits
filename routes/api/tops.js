let express = require('express');
let router = express.Router();
let topsCtrl = require('../../controllers/api/tops');

router.get('/user/:id',topsCtrl.index);
router.get('/:id',topsCtrl.show);
router.post('/',checkAuth,topsCtrl.create);
router.delete('/:id',checkAuth,topsCtrl.delete);
router.put('/:id',checkAuth,topsCtrl.update);

function checkAuth(req, res, next) {
  console.log(req.user)
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
