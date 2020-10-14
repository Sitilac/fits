const Top = require('../../models/top');

module.exports = {
  create,
  index
}

async function create(req,res){
  const tops = await Top.create(req.body);
  res.status(200).json(tops);
}

async function index(req,res){
  const tops = await Top.find({});
  res.status(200).json(tops);
}