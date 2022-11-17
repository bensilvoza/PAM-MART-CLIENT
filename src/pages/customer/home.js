// libraries
import { Grid, Cell } from "baseui/layout-grid";

// components
import Nav from "../../components/customer/shared/nav";
import Spacer from "../../components/customer/shared/spacer";
import Banner from "../../components/customer/home/banner";
import Category from "../../components/customer/home/category";
import Catalog from "../../components/customer/shared/catalog";
import CompanyInformation from "../../components/customer/shared/companyInformation";
import FooterHorizontalLine from "../../components/customer/shared/footerHorizontalLine";
import Footer from "../../components/customer/shared/footer";

// utils
import gridJustifyContentCenter from "../../utils/shared/gridJustifyContentCenter";

function Home() {
  return (
    <>
      <Nav />

      <Grid overrides={gridJustifyContentCenter}>
        <Banner />
        <Category />
        <Cell span={12}>
          <Spacer height="2rem" />
        </Cell>
        <Catalog />
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

export default Home;
