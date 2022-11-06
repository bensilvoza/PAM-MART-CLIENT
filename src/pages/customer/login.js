// libraries
import { Grid, Cell } from "baseui/layout-grid";

// components
import Nav from "../../components/customer/shared/nav";
import Spacer from "../../components/customer/shared/spacer";
import Form from "../../components/customer/login/form";

// utils
import gridJustifyContentCenter from "../../utils/shared/gridJustifyContentCenter";

// css
import "./login.css";

function Login() {
  return (
    <>
      <Nav />

      <Grid overrides={gridJustifyContentCenter}>
        <Cell span={4}>
          <Spacer height="4rem" />
          <h1 className="header">Log in</h1>
          <Spacer height="1rem" />
          <Form />
        </Cell>
      </Grid>
    </>
  );
}

export default Login;
