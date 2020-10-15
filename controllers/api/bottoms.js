const Bottom = require('../../models/bottom');

module.exports = {
  create,
  index,
  show,
  update,
  delete:deleteOne
}

async function create(req,res){
  const bottoms = await Bottom.create(req.body);
  res.status(200).json(bottoms);
}

async function index(req,res){
  const bottoms = await Bottom.find({});
  res.status(200).json(bottoms);
}

async function show(req,res){
  const bottoms = await Bottom.findById(req.params.id);
  res.status(200).json(bottoms);
}

async function update(req, res) {
  const updatedBottom = await Bottom.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updatedBottom);
}

async function deleteOne(req, res) {
  const deletedBottom = await Bottom.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedBottom);
}