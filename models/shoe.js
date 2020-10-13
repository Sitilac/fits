var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var shoeSchema = new Schema({
  brand:{type:String, required: true},
  price: Number,
  color: String,
  description: String,
  timesWorn: {type:Number, default: 0},
  lastTimeWorn: Date,
  outfit:[{
    type: Schema.Types.ObjectId,
      ref: "Fit",
  }],
  user: {type: Schema.Types.ObjectId, ref:'User'},
},{
  timestamps: true
});

module.exports = mongoose.model('Shoe', shoeSchema);