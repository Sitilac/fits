var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fitSchema = new Schema({
  name: {type: String, required: true},
  top:{
    type: Schema.Types.ObjectId,
      ref: "Top",
  },
  bottom:{
    type: Schema.Types.ObjectId,
      ref: "Bottom",
  },
  shoes:{
    type: Schema.Types.ObjectId,
      ref: "Shoe",
  },
  accessory:{
    type: Schema.Types.ObjectId,
      ref: "Accessorie",
  },
  user: {type: Schema.Types.ObjectId, ref:'User'},
},{
  timestamps: true
});

module.exports = mongoose.model('Fit', fitSchema);