const Bottom = require('../../models/bottom');

module.exports = {
  create,
}

async function create(req,res){
  const bottoms = await Bottom.create(req.body);
  res.status(200).json(bottoms);
}