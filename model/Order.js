const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  customer: {
    type: Object,
    required: true,
  },
  pizzaListInCart: {
    type: Array,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("order", OrderSchema);
