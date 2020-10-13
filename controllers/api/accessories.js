const Acc = require('../../models/accessorie')


module.exports = {
  create,
}

async function create(req,res){
  const acc = await Acc.create(req.body);
  res.status(200).json(acc);
}