// libraries
import { Grid, Cell } from "baseui/layout-grid";

// components
import Nav from "../../../components/customer/shared/nav";
import Items from "../../../components/customer/checkout/cart/items";
import Footer from "../../../components/customer/shared/footer";

// utils
import gridJustifyContentCenter from "../../../utils/shared/gridJustifyContentCenter";

function Cart() {
  return (
    <>
      <Nav />

      <Grid overrides={gridJustifyContentCenter}>
        <Items />
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

export default Cart;
