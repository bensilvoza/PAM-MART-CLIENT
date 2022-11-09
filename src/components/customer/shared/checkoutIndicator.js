import { Cell } from "baseui/layout-grid";

// components
import Spacer from "./spacer";

// css
import "./checkout-indicator.css";

function CheckoutIndicator() {
  return (
    <>
      <Cell span={6}>
        <div className="checkout-indicator-box">
          <p className="checkout-indicator">Shipping</p>
          <span>
            <i
              className="bi bi-dash-lg checkout-indicator-icon"
              style={{ marginLeft: "0" }}
            ></i>
          </span>
          <p className="checkout-indicator">Summary</p>
          <span>
            <i
              className="bi bi-dash-lg checkout-indicator-icon"
              style={{ marginLeft: "0" }}
            ></i>
          </span>
          <p className="checkout-indicator">Payment</p>
          <span>
            <i
              className="bi bi-dash-lg checkout-indicator-icon"
              style={{ marginLeft: "0" }}
            ></i>
          </span>
          <p className="checkout-indicator">Confirmation</p>
        </div>
      </Cell>

      <Cell span={12}>
        <Spacer height="1rem" />
      </Cell>
    </>
  );
}

export default CheckoutIndicator;
