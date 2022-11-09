// libraries
import axios from "axios";

async function paypal() {
  let total = 12345;
  let createPaymentJSON = {
    intent: "sale",
    payer: {
      payment_method: "paypal",
    },
    redirect_urls: {
      return_url: "http://localhost:3000/payment/confirmation",
      cancel_url: "http://localhost:3000/payment",
    },
    transactions: [{ amount: { currency: "PHP", total: total } }],
  };

  // load or data
  let load = {
    paymentChannel: "paypal",
    createPaymentJSON: createPaymentJSON,
  };

  let response = await axios.post("http://localhost:5000/payment", load);

  window.location = response["data"]["result"];
}

export default paypal;
