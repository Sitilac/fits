var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var accessorieSchema = new Schema({
  price: Number,
  color: String,
  description: String,
  timesWorn: Number,
  lastTimeWorn: Date,
  outfit:{
    type: Schema.Types.ObjectId,
      ref: "Fit",
  },
},{
  timestamps: true
});

module.exports = mongoose.model('Accessorie', accessorieSchema);