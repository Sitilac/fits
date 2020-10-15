const Acc = require('../../models/accessorie');


module.exports = {
  create,
  index,
  show,
  update,
  delete: deleteOne,
}



async function create(req,res){
  const acc = await Acc.create(req.body);
  res.status(200).json(acc);
}

async function index(req,res){
  const acc = await Acc.find({});
  res.status(200).json(acc);
}

async function show(req,res){
  const acc = await Acc.findById(req.params.id);
  res.status(200).json(acc);
}

async function update(req, res) {
  const updatedAcc = await Acc.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updatedAcc);
}

async function deleteOne(req, res) {
  const deletedAcc = await Acc.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedAcc);
}