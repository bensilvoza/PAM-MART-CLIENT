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
import Review from "../../../components/customer/product/review";
import Footer from "../../../components/customer/shared/footer";

// utils
import gridJustifyContentCenter from "../../../utils/shared/gridJustifyContentCenter";
import defaultProductData from "../../../utils/product/defaultProductData";

function Product() {
  const { id } = useParams();

  // contexts
  let { message, color, border } = useContext(NotificationContext);

  let [product, setProduct] = useState(defaultProductData);
  let [review, setReview] = useState([]);

  useEffect(function () {
    async function getProduct() {
      // communicate to server
      let responseProduct = await axios.get(
        "http://localhost:5000/product/" + id
      );
      let responseReview = await axios.get(
        "http://localhost:5000/product/review/" + id
      );

      setProduct(responseProduct.data.result);

      if (responseReview.data.result !== null) {
        setReview(responseReview.data.result.review);
      }

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

      <Grid>
        <Review productData={product} reviewData={review} />
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
