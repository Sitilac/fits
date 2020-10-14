const Acc = require('../../models/accessorie')


module.exports = {
  create,
  index
}

async function create(req,res){
  const acc = await Acc.create(req.body);
  res.status(200).json(acc);
}

async function index(req,res){
  const acc = await Acc.find({});
  res.status(200).json(acc);
}