import { useContext } from "react";

// libraries
import { Grid, Cell } from "baseui/layout-grid";

// contexts
import { NotificationContext } from "../../contexts/customer/shared/notificationContext";

// components
import Nav from "../../components/customer/shared/nav";
import Spacer from "../../components/customer/shared/spacer";
import Form from "../../components/customer/register/form";
import Notification from "../../components/customer/shared/notification";

// utils
import gridJustifyContentCenter from "../../utils/shared/gridJustifyContentCenter";

// css
import "./register.css";

function Register() {
  // contexts
  let { message, color, border } = useContext(NotificationContext);

  return (
    <>
      {message !== undefined && (
        <Notification message={message} color={color} border={border} />
      )}

      <Nav />

      <Grid overrides={gridJustifyContentCenter}>
        <Cell span={4}>
          <Spacer height="4rem" />
          <h1 className="header">Create account</h1>
          <Spacer height="1rem" />
          <Form />
        </Cell>
      </Grid>
    </>
  );
}

export default Register;
