// libraries
import { Cell } from "baseui/layout-grid";

// css
import "./side-navigation.css";

function SideNavigation() {
  return (
    <Cell span={4}>
      <p className="side-navigation-item">Manage my Account</p>
      <p className="side-navigation-item">Favorite Products</p>
      <p className="side-navigation-item">My Orders</p>
      <p className="side-navigation-item">My Reviews</p>
    </Cell>
  );
}

export default SideNavigation;
