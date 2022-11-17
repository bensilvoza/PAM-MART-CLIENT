import { useContext } from "react";

// libraries
import { Grid, Cell } from "baseui/layout-grid";

// contexts
import { NotificationContext } from "../../contexts/customer/shared/notificationContext";

// components
import Nav from "../../components/customer/shared/nav";
import Spacer from "../../components/customer/shared/spacer";
import Form from "../../components/customer/login/form";
import Notification from "../../components/customer/shared/notification";
import FooterHorizontalLine from "../../components/customer/shared/footerHorizontalLine";
import CompanyInformation from "../../components/customer/shared/companyInformation";
import Footer from "../../components/customer/shared/footer";

// utils
import gridJustifyContentCenter from "../../utils/shared/gridJustifyContentCenter";

// css
import "./login.css";

function Login() {
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
          <h1 className="header">Log in</h1>
          <Spacer height="1rem" />
          <Form />
        </Cell>
      </Grid>

      <FooterHorizontalLine />

      <Grid>
        <Cell span={12}>
          <Spacer height="1rem" />
          <CompanyInformation />
          <Spacer height="4rem" />
          <Footer />
        </Cell>
      </Grid>
    </>
  );
}

export default Login;
