// libraries
import { Grid, Cell } from "baseui/layout-grid";

// components
import Nav from "../../components/customer/shared/nav";
import Spacer from "../../components/customer/shared/spacer";
import Banner from "../../components/customer/home/banner";
import Category from "../../components/customer/home/category";
import Catalog from "../../components/customer/home/catalog";
import Footer from "../../components/customer/shared/footer";

// utils
import gridJustifyContentCenter from "../../utils/shared/gridJustifyContentCenter";

// css
import "./home.css";

function Home() {
  return (
    <>
      <Nav />

      <Grid overrides={gridJustifyContentCenter}>
        <Banner />
        <Category />
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
