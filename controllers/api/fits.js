const Fit = require('../../models/fit')

module.exports = {
  index,
  show,
  create,
  delete:deleteOne,
  update
}

async function index(req,res){
  const fits = await Fit.find({user:req.params.id}).populate("top bottom shoes accessory").exec(function(err,fit){
    res.status(200).json(fit);
  })  
}
async function show(req,res){
  res.render()
}
async function create(req,res){
  const fits = await Fit.create(req.body);
  res.status(200).json(fits);
}
async function deleteOne(req,res){
  const deletedFits = await Fit.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedFits);
}
async function update(req,res){
  const updatedFit = await Fit.findByIdAndUpdate(req.params.id, req.body, {new: true}).populate("top bottom shoes accessory").exec(function(err,fit){
    res.status(200).json(fit);
  })
}
