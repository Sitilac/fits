const Shoe = require('../../models/shoe');
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

module.exports = {
  create,
  index,
  show,
  update,
  delete:deleteOne
}

async function create(req,res){
  const shoes = await Shoe.create(req.body);
  shoes.lastTimeWorn = (date);
  shoes.user = req.body.user;
  res.status(200).json(shoes);
}

async function index(req,res){
  const shoes = await Shoe.find({});
  res.status(200).json(shoes);
}

async function show(req,res){
  const shoes = await Shoe.findById(req.params.id);
  res.status(200).json(shoes);
}

async function update(req, res) {
  const updatedShoe = await Shoe.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updatedShoe);
}

async function deleteOne(req, res) {
  const deletedShoe = await Shoe.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedShoe);
}