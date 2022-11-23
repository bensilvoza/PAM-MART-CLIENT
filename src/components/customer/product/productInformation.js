// libraries
import { useState, useContext } from "react";
import { Cell } from "baseui/layout-grid";
import { Button, KIND } from "baseui/button";

// contexts
import { NotificationContext } from "../../../contexts/customer/shared/notificationContext";

// components
import Spacer from "../shared/spacer";

// css
import "./productInformation.css";

function ProductInformation(props) {
  // contexts
  var { handleInformation } = useContext(NotificationContext);

  let [quantity, setQuantity] = useState(0);

  function handleClickDecreaseQuantity() {
    if (quantity === 0) return;

    let quantityCopy = quantity;
    setQuantity(quantityCopy - 1);
  }

  function handleClickIncreaseQuantity() {
    let quantityCopy = quantity;
    setQuantity(quantityCopy + 1);
  }

  function handleClickAddToCart() {
    if (quantity === 0) return;

    // order = {}
    // orders = []

    let order = {
      id: props.data.id,
      timeStampInSeconds: Math.floor(Date.now() / 1000),
      image: props.data.image,
      name: props.data.name,
      price: props.data.price,
      quantity: quantity,
      total: quantity * props.data.price,
    };

    let orders = JSON.parse(localStorage.getItem("orders"));

    if (orders === null) {
      orders = [];
      orders.push(order);

      // save orders to localStorage
      localStorage.setItem("orders", JSON.stringify(orders));
    } else {
      orders.push(order);

      // save orders to localStorage
      localStorage.setItem("orders", JSON.stringify(orders));
    }

    handleInformation("Added", "darkgreen", "1px solid darkgreen");

    setTimeout(function () {
      handleInformation(undefined, undefined, undefined);
      return;
    }, 10000);

    return;
  }

  return (
    <>
      <Cell span={12}>
        <Spacer height="2rem" />
      </Cell>

      <Cell span={6}>
        <img
          className="product-information-image"
          src={props.data.image}
          alt={props.data.name}
        />
      </Cell>

      <Cell span={6}>
        <div>
          <p className="product-name">{props.data.name}</p>
          <p className="product-information-price">₱{props.data.price}.00</p>

          <p className="color-section">Color</p>
          <div className="color-box">
            <p className="color-item">White</p>
            <p className="color-item">Gray</p>
            <p className="color-item">Blue</p>
            <p className="color-item">Black</p>
          </div>

          <p className="size-section">Size</p>
          <div className="size-box">
            <p className="size-item">Small</p>
            <p className="size-item">Meduim</p>
            <p className="size-item">Large</p>
            <p className="size-item">Extra large</p>
          </div>

          <p className="shipping-info">SHIPPING INFORMATION</p>
          <p className="shipping-message">
            Our Online Store receives orders non-stop and you will receive your
            order based on the standard delivery time.
          </p>

          <p className="product-description">{props.data.description}</p>

          <p className="product-quantity-header">Product Quantity</p>
          <div className="quantity-box">
            <div className="quantity-changer">
              <span onClick={handleClickDecreaseQuantity}>
                <i
                  className="bi bi-dash-circle dash-icon"
                  style={{ marginLeft: "0", marginRight: "1rem" }}
                ></i>
              </span>
              <p className="quantity">{quantity}</p>
              <span onClick={handleClickIncreaseQuantity}>
                <i
                  className="bi bi-plus-circle plus-icon"
                  style={{ marginLeft: "1rem" }}
                ></i>
              </span>
            </div>

            <div>
              <p className="total">₱{quantity * props.data.price}.00</p>
            </div>
          </div>

          <Button
            onClick={handleClickAddToCart}
            kind={KIND.secondary}
            overrides={{
              BaseButton: {
                style: {
                  width: "100%",
                },
              },
            }}
          >
            Add to cart
          </Button>
        </div>
      </Cell>
    </>
  );
}

export default ProductInformation;
