// libraries
import { Grid, Cell } from "baseui/layout-grid";

// components
import Nav from "../../../components/customer/shared/nav";
import Catalog from "../../../components/customer/shared/catalog";
import Spacer from "../../../components/customer/shared/spacer";
import FooterHorizontalLine from "../../../components/customer/shared/footerHorizontalLine";
import CompanyInformation from "../../../components/customer/shared/companyInformation";
import Footer from "../../../components/customer/shared/footer";

// utils
import gridJustifyContentCenter from "../../../utils/shared/gridJustifyContentCenter";

function Home() {
  return (
    <>
      <Nav />

      <Grid overrides={gridJustifyContentCenter}>
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
