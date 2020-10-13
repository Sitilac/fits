var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var shoeSchema = new Schema({
  price: Number,
  color: String,
  description: String,
  timesWorn: Number,
  lastTimeWorn: Date,
  outfits: {
    [{type: Schema.Types.ObjectId, ref:'Fit'}]
  },
},{
  timestamps: true
});

module.exports = mongoose.model('Shoe', shoeSchema);