const Shoe = require('../../models/shoe');
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

module.exports = {
  create,
}

async function create(req,res){
  const shoes = await Shoe.create(req.body);
  shoes.lastTimeWorn = (date);
  shoes.user = req.body.user;
  res.status(200).json(shoes);
}

