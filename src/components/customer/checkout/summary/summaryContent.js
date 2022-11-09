// libraries
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, KIND } from "baseui/button";
import { Cell } from "baseui/layout-grid";

// components
import Spacer from "../../shared/spacer";
import WidthSpacer from "../../shared/widthSpacer";

// css
import "./summary-content.css";

function SummaryContent() {
  const navigate = useNavigate();

  let [orders, setOrders] = useState([]);
  let [total, setTotal] = useState("");
  let [address, setAddress] = useState({});

  function handleClickGoBack() {
    return navigate("/shipping");
  }

  async function handleClickPayment(e) {
    return navigate("/payment");
  }

  useEffect(function () {
    let orders = JSON.parse(localStorage.getItem("orders"));

    // calculate total
    let total = 0;
    for (let i = 0; i < orders.length; i++) {
      total = total + orders[i]["total"];
    }
    setTotal(total);

    setOrders(orders);

    let address = JSON.parse(localStorage.getItem("address"));
    setAddress(address);

    return;
  }, []);

  return (
    <Cell span={6}>
      <h1 className="summary-content-header">Summary</h1>

      <h3 className="summary-content-title">Items</h3>
      {orders.map((order) => (
        <>
          <div className="summary-content-item-box">
            <p className="summary-content-item">Name:</p>
            <p className="summary-content-item">{order["name"]}</p>
          </div>

          <div className="summary-content-item-box">
            <p className="summary-content-item">Price:</p>
            <p className="summary-content-item">₱{order["price"]}.00</p>
          </div>

          <div className="summary-content-item-box">
            <p className="summary-content-item">Quantity:</p>
            <p className="summary-content-item">{order["quantity"]}</p>
          </div>

          <div className="summary-content-item-box">
            <p className="summary-content-item">Initial:</p>
            <p className="summary-content-item">{order["total"]}</p>
          </div>

          <Spacer height=".5rem" />
        </>
      ))}

      <div className="summary-content-item-box">
        <p className="summary-content-total">TOTAL:</p>
        <p className="summary-content-total">₱{total}.00</p>
      </div>

      <h3 className="summary-content-title">Address</h3>
      <div className="summary-content-item-box">
        <p className="summary-content-item">Street:</p>
        <p className="summary-content-item">{address["street"]}</p>
      </div>

      <div className="summary-content-item-box">
        <p className="summary-content-item">City:</p>
        <p className="summary-content-item">{address["city"]}</p>
      </div>

      <div className="summary-content-item-box">
        <p className="summary-content-item">Province:</p>
        <p className="summary-content-item">{address["province"]}</p>
      </div>

      <div className="summary-content-item-box">
        <p className="summary-content-item">Country:</p>
        <p className="summary-content-item">{address["country"]}</p>
      </div>

      <Spacer height="1rem" />

      <Button kind={KIND.secondary} onClick={handleClickGoBack}>
        Go Back
      </Button>

      <WidthSpacer width="1rem" />

      <Button onClick={handleClickPayment}>PROCEED TO PAYMENT</Button>
    </Cell>
  );
}

export default SummaryContent;
