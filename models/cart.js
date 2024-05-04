// cartItemSchema.js

const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  itemname: {
    type: String,
    // required: true,
  },
  price: {
    type: String,
    // required: true,
  },
  quantity: {
    type: Number,
    // required: true,
  },
  size: {
    type: String,
    // required: true,
  },
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

module.exports = CartItem;
