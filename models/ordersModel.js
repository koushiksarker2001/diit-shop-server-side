const mongoose = require("mongoose");

const orderModel = mongoose.model(
  "orders",
  new mongoose.Schema({}, { strict: false })
);

module.exports = orderModel;
