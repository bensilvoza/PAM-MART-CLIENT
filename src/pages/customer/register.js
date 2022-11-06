// libraries
import { Grid, Cell } from "baseui/layout-grid";

// components
import Nav from "../../components/customer/shared/nav";
import Spacer from "../../components/customer/shared/spacer";
import Form from "../../components/customer/register/form";

// utils
import gridJustifyContentCenter from "../../utils/shared/gridJustifyContentCenter";

// css
import "./register.css";

function Register() {
  return (
    <>
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
