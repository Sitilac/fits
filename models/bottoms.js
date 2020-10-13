var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var topSchema = new Schema({
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

module.exports = mongoose.model('Top', topSchema);