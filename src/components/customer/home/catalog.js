// libraries
import { useState, useEffect } from "react";
import axios from "axios";
import { Cell } from "baseui/layout-grid";

// components
import Spacer from "../shared/spacer";

// css
import "./catalog.css";

function Catalog() {
  let [products, setProducts] = useState([]);

  useEffect(function () {
    async function getProducts() {
      // communicate to server
      let response = await axios.get("http://localhost:5000/");

      setProducts(response.data.result);
    }
    // call
    getProducts();

    return;
  });
  return (
    <>
      <Cell span={12}>
        <Spacer height="4rem" />
        <p className="browse-products">Browse products</p>
        <Spacer height="1rem" />
      </Cell>

      {products.map((product, index) => (
        <Cell key={product["id"]} span={4}>
          <div>
            <img className="product-image" src={product["image"]} />
            <p className="product-name">{product["name"]}</p>
            <p className="product-price">₱{product["price"]}.00</p>
            <span>
              <i
                style={{ margin: "0" }}
                className="bi bi-arrow-right product-card-icon"
              ></i>
            </span>
          </div>

          {(index + 1) % 3 === 0 && <Spacer height="2rem" />}
        </Cell>
      ))}
    </>
  );
}

export default Catalog;
