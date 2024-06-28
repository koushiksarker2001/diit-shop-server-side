const orderModel = require("../../models/ordersModel");

module.exports.getAllOrder = async (req, res) => {
  try {
    const allOrder = await orderModel.find();
    if (allOrder.length > 0) {
      res.status(200).json(allOrder);
    }
  } catch (error) {
    console.log(error);
  }
};
