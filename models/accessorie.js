var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var accessorieSchema = new Schema({
  brand:{type:String, required: true},
  price: Number,
  color: String,
  description: String,
  timesWorn: Number,
  lastTimeWorn: Date,
  outfit:[{
    type: Schema.Types.ObjectId,
      ref: "Fit",
  }],
  user: {type: Schema.Types.ObjectId, ref:'User'},
},{
  timestamps: true
});

module.exports = mongoose.model('Accessorie', accessorieSchema);