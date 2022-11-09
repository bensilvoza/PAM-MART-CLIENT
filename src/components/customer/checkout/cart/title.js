// libraries
import { Cell } from "baseui/layout-grid";

// components
import Spacer from "../../shared/spacer";

// css
import "./title.css";

function Title() {
  return (
    <>
      <Cell span={4}></Cell>
      <Cell span={2}>
        <p className="cart-items-title">Name</p>
      </Cell>
      <Cell span={1}>
        <p className="cart-items-title">Price</p>
      </Cell>
      <Cell span={1}>
        <p className="cart-items-title">Quantity</p>
      </Cell>
      <Cell span={2}>
        <p className="cart-items-title">Total</p>
      </Cell>

      <Cell span={10}>
        <div className="cart-items-hr"></div>
        <Spacer height=".5rem" />
      </Cell>
    </>
  );
}

export default Title;
