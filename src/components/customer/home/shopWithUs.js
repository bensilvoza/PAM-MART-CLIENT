// libraries
import { Cell } from "baseui/layout-grid";

// components
import Spacer from "../shared/spacer";

// css
import "./shop-with-us.css";

function ShopWithUs() {
  return (
    <>
      <Cell span={12}>
        <Spacer height="4rem" />
      </Cell>

      <Cell span={6}>
        <div className="shop-with-us-message-box">
          <p className="shop-with-us-title">Shop With Us</p>
          <p className="shop-with-us-description">
            Shop in the heart of your nearest store, we offer quality imported
            and local products from family favorites in our top-name grocery
            brands, to home and pet care, leading alcohol labels from wineries
            and distilleries worldwide, personal care and more. See you there!
          </p>
        </div>
      </Cell>

      <Cell span={6}>
        <img
          className="shop-with-us-img"
          src="https://cdn.shopify.com/s/files/1/0664/7355/8236/files/Personal-Shopper.webp?v=1665839181&width=750"
        />
      </Cell>
    </>
  );
}

export default ShopWithUs;
