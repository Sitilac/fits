const Top = require('../../models/top');

module.exports = {
  create,
  index,
  show,
  update,
  delete:deleteOne
}

async function create(req,res){
  const tops = await Top.create(req.body);
  res.status(200).json(tops);
}

async function index(req,res){
  const tops = await Top.find({user:req.params.id});
  res.status(200).json(tops);
}

async function show(req,res){
  const tops = await Top.findById(req.params.id);
  res.status(200).json(tops);
}

async function update(req, res) {
  const updatedTop = await Top.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updatedTop);
}

async function deleteOne(req, res) {
  const deletedTops = await Top.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedTops);
}