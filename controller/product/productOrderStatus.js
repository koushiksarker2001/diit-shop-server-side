const orderModel = require("../../models/ordersModel");

const productOrderStatus = async (req, res) => {
  const order = req.body;
  if (order?.pay_status == "Successful") {
    try {
      const result = await orderModel.create(order);
      if (result?._id) {
        res.redirect("http://localhost:3000");
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    res.redirect("http://localhost:3000");
  }
};
module.exports = productOrderStatus;
