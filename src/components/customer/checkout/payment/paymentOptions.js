// libraries
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, KIND } from "baseui/button";
import { Cell } from "baseui/layout-grid";

// contexts
import { NotificationContext } from "../../../../contexts/customer/shared/notificationContext";

// utils
import paypal from "../../../../utils/checkout/payment/paypal";
import saveSummaryToDb from "../../../../utils/checkout/payment/saveSummaryToDb";

// css
import "./payment.css";

function PaymentOptions() {
  const navigate = useNavigate();

  // contexts
  var { handleInformation } = useContext(NotificationContext);

  function handleClickGoBack() {
    return navigate("/summary");
  }

  async function handleClickPaymentChannel(channel) {
    // validation for logged in customer
    let isAuthenticated = JSON.parse(localStorage.getItem("customer"));
    if (isAuthenticated === null) {
      handleInformation("Login required", "darkred", "1px solid darkred");

      setTimeout(function () {
        handleInformation(undefined, undefined, undefined);
        return;
      }, 10000);

      return;
    }

    // pull up data from localStorage
    let orders = JSON.parse(localStorage.getItem("orders"));
    let customer = JSON.parse(localStorage.getItem("customer"));
    let address = JSON.parse(localStorage.getItem("address"));

    let summary = {
      name: customer["name"],
      orders: orders,
      address: address,
      channel: channel, // payment channel
    };

    // save order summary to localStorage
    localStorage.setItem("summary", JSON.stringify(summary));

    // save summary to db
    saveSummaryToDb();

    // clear customer cart
    localStorage.removeItem("orders");

    // payment channel section

    if (channel === "cod") {
      return navigate("/confirmation");
    }

    if (channel === "paypal") {
      return await paypal();
    }
  }

  return (
    <Cell span={6}>
      <h1 className="payment-header">Payment</h1>

      <p className="payment-options">Gcash</p>
      <p
        className="payment-options"
        onClick={function () {
          handleClickPaymentChannel("paypal");
        }}
      >
        Paypal
      </p>
      <p className="payment-options">Maya</p>
      <p
        className="payment-options"
        onClick={function () {
          handleClickPaymentChannel("cod");
        }}
      >
        Cash on Delivery
      </p>

      <Button kind={KIND.secondary} onClick={handleClickGoBack}>
        Go Back
      </Button>
    </Cell>
  );
}

export default PaymentOptions;
