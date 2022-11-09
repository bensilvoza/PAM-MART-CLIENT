// libraries
import { Cell } from "baseui/layout-grid";

// components
import Spacer from "../../shared/spacer";

// css
import "./cart-items.css";

function CartItems(props) {
  return (
    <>
      <Cell span={4}>
        <img className="cart-items-image" src={props.image} alt="img" />
      </Cell>

      <Cell span={2}>
        <p className="cart-items-item">{props.name}</p>
      </Cell>

      <Cell span={1}>
        <p className="cart-items-item">₱{props.price}.00</p>
      </Cell>

      <Cell span={1}>
        <p className="cart-items-item">{props.quantity}</p>
      </Cell>

      <Cell span={2}>
        <p className="cart-items-item">₱{props.total}.00</p>
      </Cell>

      <Cell span={12}>
        {" "}
        <Spacer height="1rem" />
      </Cell>
    </>
  );
}

export default CartItems;
