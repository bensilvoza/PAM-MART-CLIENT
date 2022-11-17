// libraries
import { Grid, Cell } from "baseui/layout-grid";

// components
import Nav from "../../components/customer/shared/nav";
import Spacer from "../../components/customer/shared/spacer";
import WelcomeSection from "../../components/customer/account/welcomeSection";
import SideNavigation from "../../components/customer/account/sideNavigation";
import ManageMyAccount from "../../components/customer/account/manageMyAccount";
import FooterHorizontalLine from "../../components/customer/shared/footerHorizontalLine";
import CompanyInformation from "../../components/customer/shared/companyInformation";
import Footer from "../../components/customer/shared/footer";

// utils
import gridJustifyContentCenter from "../../utils/shared/gridJustifyContentCenter";

function Home() {
  return (
    <>
      <Nav />

      <Grid overrides={gridJustifyContentCenter}>
        <Cell span={12}>
          <Spacer height="2rem" />
        </Cell>
        <WelcomeSection />
        <SideNavigation />
        <ManageMyAccount />
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
