// libraries
import { Grid, Cell } from "baseui/layout-grid";

// components
import Nav from "../../../components/customer/shared/nav";
import Catalog from "../../../components/customer/shared/catalog";
import Footer from "../../../components/customer/shared/footer";

// utils
import gridJustifyContentCenter from "../../../utils/shared/gridJustifyContentCenter";

// css
import "./products.css";

function Home() {
  return (
    <>
      <Nav />

      <Grid overrides={gridJustifyContentCenter}>
        <Catalog />
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

export default Home;
