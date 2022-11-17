// libraries
import { Grid, Cell } from "baseui/layout-grid";

// components
import Nav from "../../../components/customer/shared/nav";
import CheckoutIndicator from "../../../components/customer/shared/checkoutIndicator";
import SummaryContent from "../../../components/customer/checkout/summary/summaryContent";
import Spacer from "../../../components/customer/shared/spacer";
import FooterHorizontalLine from "../../../components/customer/shared/footerHorizontalLine";
import CompanyInformation from "../../../components/customer/shared/companyInformation";
import Footer from "../../../components/customer/shared/footer";

// utils
import gridJustifyContentCenter from "../../../utils/shared/gridJustifyContentCenter";

function Summary() {
  return (
    <>
      <Nav />

      <Grid overrides={gridJustifyContentCenter}>
        <Cell span={12}>
          <Spacer height="1rem" />
        </Cell>

        <CheckoutIndicator />
        <SummaryContent />

        <Cell span={12}>
          <Spacer height="2rem" />
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

export default Summary;
