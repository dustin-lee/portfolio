var mongoose = require('mongoose');
// build your user schema and add it to the mongoose.models
var contactSchema = new mongoose.Schema({
  name: {
   type: String,
  //  required: true,
  },
  email: {
    type: String,
    // required: true
  },
  message: {
    type: String,
    // required: true
  }
  // timestamps: {
  //   createdAt: 'created_at',
  //   updatedAt: 'updated_at'
  // }
});


mongoose.model('Contact', contactSchema);
