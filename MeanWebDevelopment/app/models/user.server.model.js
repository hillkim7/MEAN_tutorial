var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    // index: true,
    match: /.+\@.+\..+/
  },
  username: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  password: String,
  role: {
    type: String,
    enum: ['Admin', 'Owner', 'User']
  },
  created: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('User', UserSchema);
