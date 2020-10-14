const Bottom = require('../../models/bottom');

module.exports = {
  create,
  index
}

async function create(req,res){
  const bottoms = await Bottom.create(req.body);
  res.status(200).json(bottoms);
}
async function index(req,res){
  const bottoms = await Bottom.find({});
  res.status(200).json(bottoms);
}