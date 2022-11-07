import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// libraries
import { Grid, Cell } from "baseui/layout-grid";

// contexts
import { NotificationContext } from "../../../contexts/customer/shared/notificationContext";

// components
import Nav from "../../../components/customer/shared/nav";
import Notification from "../../../components/customer/shared/notification";
import ProductInformation from "../../../components/customer/product/productInformation";
import Footer from "../../../components/customer/shared/footer";

// utils
import gridJustifyContentCenter from "../../../utils/shared/gridJustifyContentCenter";

function Product() {
  const { id } = useParams();

  // contexts
  let { message, color, border } = useContext(NotificationContext);

  let [product, setProduct] = useState({});

  useEffect(function () {
    async function getProduct() {
      // communicate to server
      let response = await axios.get("http://localhost:5000/product/" + id);

      setProduct(response.data.result);
      return;
    }
    // call
    getProduct();
  }, []);

  return (
    <>
      {message !== undefined && (
        <Notification message={message} color={color} border={border} />
      )}

      <Nav />

      <Grid overrides={gridJustifyContentCenter}>
        <ProductInformation data={product} />
      </Grid>

      <div className="horizontal-line"></div>
      <Grid>
        <Cell span={12}>
          <Footer />
        </Cell>
      </Grid>
    </>
  );
}

export default Product;
