let express = require('express');
let router = express.Router();
let accessoriesCtrl = require('../../controllers/api/accessories');

router.get('/user/:id',accessoriesCtrl.index);
router.get('/:id',accessoriesCtrl.show);
router.post('/',checkAuth,accessoriesCtrl.create);
router.delete('/:id',checkAuth,accessoriesCtrl.delete);
router.put('/:id',checkAuth,accessoriesCtrl.update);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}
module.exports = router;
