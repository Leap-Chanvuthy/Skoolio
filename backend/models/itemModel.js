const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    date_of_birth: {
      type: Date,
      required: true,
    },
    major: {
      type: String,
      required: true,
    },
    generation: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;
