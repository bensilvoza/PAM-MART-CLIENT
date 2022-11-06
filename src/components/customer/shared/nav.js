// libraries
import { Grid, Cell } from "baseui/layout-grid";

// css
import "./nav.css";

function Nav() {
  return (
    <Grid>
      <Cell span={12}>
        <div className="nav">
          <div>
            <p className="nav-brand">Pam mart</p>
          </div>
          <div className="nav-item-box">
            <p className="nav-item">Products</p>
            <p className="nav-item">Cart</p>
            <p className="nav-item">Search</p>
            <p className="nav-item">Account</p>
          </div>
        </div>
      </Cell>
    </Grid>
  );
}

export default Nav;
