const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: {type: String, required: true, maxLength: 200, minLength: 2},
    band: [{ type: mongoose.Schema.Types.ObjectId, ref: 'band' }],
    event: [{ type: mongoose.Schema.Types.ObjectId, ref: 'event' }],
  }
);

module.exports = mongoose.model('genre', genreSchema);

