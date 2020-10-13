var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fitSchema = new Schema({
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
  accessorie:{
    type: Schema.Types.ObjectId,
      ref: "Accessorie",
  },
  user: {type: Schema.Types.ObjectId, ref:'User'},
},{
  timestamps: true
});

module.exports = mongoose.model('Fit', fitSchema);