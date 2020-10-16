const Fit = require('../../models/fit')

module.exports = {
  index,
  show,
  create,
  delete:deleteOne,
  update
}

async function index(req,res){
  const fits = await Fit.find({user:req.params.id});
  res.status(200).json(fits);
}
async function show(req,res){
  res.render()
}
async function create(req,res){
  const fits = await Fit.create(req.body);
  res.status(200).json(fits);
}
async function deleteOne(req,res){
  res.render()
}
async function update(req,res){
  res.render()
}
