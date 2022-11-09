// libraries
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, KIND } from "baseui/button";
import { Cell } from "baseui/layout-grid";

// contexts
import { NotificationContext } from "../../../../contexts/customer/shared/notificationContext";

// utils
import paypal from "../../../../utils/checkout/payment/paypal";

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

    if (channel === "cod") {
      return navigate("/confirmation");
    }

    // communicate to server

    // paypal channel
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
