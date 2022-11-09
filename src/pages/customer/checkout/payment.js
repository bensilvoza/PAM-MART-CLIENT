// libraries
import { useContext } from "react";
import { Grid, Cell } from "baseui/layout-grid";

// contexts
import { NotificationContext } from "../../../contexts/customer/shared/notificationContext";

// components
import Nav from "../../../components/customer/shared/nav";
import CheckoutIndicator from "../../../components/customer/shared/checkoutIndicator";
import PaymentOptions from "../../../components/customer/checkout/payment/paymentOptions";
import Spacer from "../../../components/customer/shared/spacer";
import Notification from "../../../components/customer/shared/notification";
import Footer from "../../../components/customer/shared/footer";

// utils
import gridJustifyContentCenter from "../../../utils/shared/gridJustifyContentCenter";

function Payment() {
  // contexts
  let { message, color, border } = useContext(NotificationContext);

  return (
    <>
      {message !== undefined && (
        <Notification message={message} color={color} border={border} />
      )}

      <Nav />

      <Grid overrides={gridJustifyContentCenter}>
        <Cell span={12}>
          <Spacer height="1rem" />
        </Cell>

        <CheckoutIndicator />
        <PaymentOptions />

        <Cell span={12}>
          <Spacer height="2rem" />
        </Cell>
      </Grid>

      <div className="horizontal-line"></div>
      <Grid>
        <Cell span={12}>
          <Footer />
        </Cell>
      </Grid>
    </>
  );
}

export default Payment;
