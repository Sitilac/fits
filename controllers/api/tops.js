const Top = require('../../models/top');

module.exports = {
  create,
}

async function create(req,res){
  const tops = await Top.create(req.body);
  res.status(200).json(tops);
}