// libraries
import { Grid, Cell } from "baseui/layout-grid";

// components
import Nav from "../../../components/administrator/shared/nav";
import Spacer from "../../../components/administrator/shared/spacer";
import Form from "../../../components/administrator/product/create/form";

// utils
import gridJustifyContentCenter from "../../../utils/shared/gridJustifyContentCenter";

// css
import "./create.css";

function CreateProduct() {
  return (
    <>
      <Nav />

      <Grid overrides={gridJustifyContentCenter}>
        <Cell span={6}>
          <Spacer height="4rem" />
          <h1 className="header">Create Product</h1>
          <Spacer height="1rem" />
          <Form />
        </Cell>
      </Grid>
    </>
  );
}

export default CreateProduct;
