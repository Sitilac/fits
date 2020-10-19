let express = require('express');
let router = express.Router();
let bottomsCtrl = require('../../controllers/api/bottoms');

router.get('/user/:id',bottomsCtrl.index);
router.get('/:id',bottomsCtrl.show);
router.post('/',checkAuth,bottomsCtrl.create);
router.delete('/:id',checkAuth,bottomsCtrl.delete);
router.put('/:id',checkAuth,bottomsCtrl.update);

function checkAuth(req, res, next) {
  console.log(req.user)
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}
module.exports = router;
