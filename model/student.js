const { Schema, model } = require('mongoose');

const StudentSchema = new Schema({
  name: { type: String, required: true },
  dni: String,
  subject: String,
  grade: Number,
});

module.exports = model('Student', StudentSchema);
