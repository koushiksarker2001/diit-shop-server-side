const { default: axios } = require("axios");
const orderModel = require("../../models/ordersModel");
const { v4: uuidv4 } = require("uuid");
const productOrder = async (req, res) => {
  try {
    const { cus_email, cus_name, cus_phone, amount, cus_add1, opt_a } =
      req.body;
    const formData = {
      cus_name,
      cus_email,
      cus_phone,
      amount,
      opt_a,
      tran_id: uuidv4(),
      signature_key: "dbb74894e82415a2f7ff0ec3a97e4183",
      store_id: "aamarpaytest",
      currency: "BDT",
      desc: "Payed",
      cus_add1: `${cus_add1}`,
      cus_add2: "Dhaka",
      cus_city: "Dhaka",
      cus_country: "Bangladesh",
      success_url: `http://localhost:8080/api/product-order-status`,
      fail_url: "http://localhost:8080/api/product-order-status",
      cancel_url: "http://localhost:8080/api/",
      type: "json", //This is must required for JSON request
    };
    const { data } = await axios.post(
      "https://sandbox.aamarpay.com/jsonpost.php",
      formData
    );

    if (data.result !== "true") {
      let errorMessage = "";
      for (let key in data) {
        errorMessage += data[key] + ". ";
      }
      return res.render("error", {
        title: "Error",
        errorMessage,
      });
    }
    res.status(301).redirect(data.payment_url);
  } catch (error) {
    console.log(error);
  }
};

module.exports = productOrder;
