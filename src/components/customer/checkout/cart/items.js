// libraries
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Cell } from "baseui/layout-grid";
import { Button } from "baseui/button";

// components
import Spacer from "../../shared/spacer";
import Title from "./title";
import CartItems from "./cartItems";

// css
import "./items.css";

function Items() {
  const navigate = useNavigate();

  let [orders, setOrders] = useState([]);

  function calculateOrders() {
    if (orders.length !== 0) {
      let result = 0;
      for (let i = 0; i < orders.length; i++) {
        result = result + orders[i]["total"];
      }
      return result;
    } else {
      return 0;
    }
  }

  function handleClickShipping() {
    return navigate("/shipping");
  }

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
        <h1 className="cart-items-header">Cart</h1>
        <div className="cart-items-hr"></div>
      </Cell>
      {calculateOrders() !== 0 && (
        <>
          <Title />

          {orders.map((order) => (
            <CartItems
              image={order["image"]}
              name={order["name"]}
              price={order["price"]}
              quantity={order["quantity"]}
              total={order["total"]}
            />
          ))}

          <Cell span={10}>
            <div className="cart-items-hr"></div>
            <div className="cart-items-total-box">
              <p className="cart-items-total">TOTAL</p>
              <p className="cart-items-total-amount">₱{calculateOrders()}.00</p>
            </div>
            <div className="cart-items-hr"></div>
          </Cell>

          <Cell span={10}>
            <Spacer height="1rem" />
            <Button onClick={handleClickShipping}>PROCEED TO SHIPPING</Button>
          </Cell>
        </>
      )}
    </>
  );
}

export default Items;
