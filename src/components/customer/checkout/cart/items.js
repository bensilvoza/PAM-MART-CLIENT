// libraries
import { useState, useEffect } from "react";
import { Cell } from "baseui/layout-grid";
import { Button } from "baseui/button";

// components
import Spacer from "../../shared/spacer";

// css
import "./items.css";

function Items() {
  let [orders, setOrders] = useState([]);

  useEffect(function () {
    function getOrders() {
      let response = JSON.parse(localStorage.getItem("orders"));

      if (response !== null) {
        setOrders(response);
      }
    }
    // call
    getOrders();

    return;
  }, []);

  return (
    <>
      <Cell span={10}>
        <h1 className="cart-header">Cart</h1>
        <div className="cart-items-hr"></div>
      </Cell>

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

      {orders.map((order) => (
        <>
          <Cell span={4}>
            <img className="cart-items-image" src={order["image"]} />
          </Cell>

          <Cell span={2}>
            <p className="cart-items-item">{order["name"]}</p>
          </Cell>

          <Cell span={1}>
            <p className="cart-items-item">₱{order["price"]}.00</p>
          </Cell>

          <Cell span={1}>
            <p className="cart-items-item">{order["quantity"]}</p>
          </Cell>

          <Cell span={2}>
            <p className="cart-items-item">₱{order["total"]}.00</p>
          </Cell>

          <Cell span={12}>
            {" "}
            <Spacer height="1rem" />
          </Cell>
        </>
      ))}

      <Cell span={10}>
        <div className="cart-items-hr"></div>
        <div className="cart-items-total-box">
          <p className="cart-items-total">TOTAL</p>
          <p className="cart-items-total-amount">₱12345.00</p>
        </div>
        <div className="cart-items-hr"></div>
      </Cell>

      <Cell span={10}>
        <Spacer height="1rem" />
        <Button>PROCEED TO SHIPPING</Button>
      </Cell>
    </>
  );
}

export default Items;
