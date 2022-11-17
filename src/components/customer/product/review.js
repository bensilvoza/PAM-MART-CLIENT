// libraries
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Cell } from "baseui/layout-grid";
import { Input } from "baseui/input";

// contexts
import { NotificationContext } from "../../../contexts/customer/shared/notificationContext";

// components
import Spacer from "../shared/spacer";

// css
import "./review.css";

function Review(props) {
  // contexts
  let { handleInformation } = useContext(NotificationContext);

  let [reviewData, setReviewData] = useState([]);
  let [description, setDescription] = useState("");
  let [isReviewCreated, setIsReviewCreated] = useState(false);
  let [indicesOfLikedReview, setIndicesOfLikedReview] = useState([]);
  let customer = JSON.parse(localStorage.getItem("customer"));

  function handleIndicesOfLikedReview(reviewData) {
    let likedReviewData = [];

    // customer is not logged in
    if (customer === null) {
      for (let i = 0; i < reviewData.length; i++) {
        likedReviewData.push(false);
      }
      return setIndicesOfLikedReview(likedReviewData);
    }

    for (let i = 0; i < reviewData.length; i++) {
      for (let j = 0; j < reviewData[i]["peopleWhoLike"].length; j++) {
        if (reviewData[i]["peopleWhoLike"][j]["name"] === customer["name"]) {
          likedReviewData.push(true);
          break;
        }
        if (j + 1 === reviewData[i]["peopleWhoLike"].length) {
          likedReviewData.push(false);
        }
      }
    }

    return setIndicesOfLikedReview(likedReviewData);
  }

  async function handleClickReviewLikeData(reviewAuthor) {
    // validation for logged in customer
    if (customer === null) return;

    let reviewLikeData = {
      method: "addReviewLike",
      productId: props.productData.id,
      reviewAuthor: reviewAuthor,
      reviewLikerName: customer["name"],
    };

    // communicate to server
    let response = await axios.post(
      "http://localhost:5000/product/review",
      reviewLikeData
    );

    if (response.data.message === "OK") {
      setReviewData(response["data"]["result"]["review"]);
      handleIndicesOfLikedReview(response["data"]["result"]["review"]);
    }

    return;
  }

  async function handleSubmitForm(e) {
    e.preventDefault();

    // return empty review
    if (description === "") return;

    // validation for logged in customer
    let isAuthenticated = JSON.parse(localStorage.getItem("customer"));

    if (isAuthenticated === null) {
      handleInformation("Login required", "darkred", "1px solid darkred");

      setTimeout(function () {
        handleInformation(undefined, undefined, undefined);
        return;
      }, 10000);
    }

    // review information
    let information = {
      method: "addReview",
      productId: props.productData.id,
      name: customer["name"],
      description: description,
    };

    // communicate to server
    let response = await axios.post(
      "http://localhost:5000/product/review",
      information
    );

    if (response.data.message === "OK") {
      setReviewData(response["data"]["result"]["review"]);
    }

    return;
  }

  useEffect(function () {
    function populateReviewData() {
      // code short-circuitting
      if (reviewData.length > 0) return;

      handleIndicesOfLikedReview(props.reviewData);

      setReviewData(props.reviewData);
      return;
    }
    // call
    populateReviewData();

    function checkIsReviewCreated() {
      // code short-circuitting
      if (isReviewCreated === true) return;

      // code short-circuitting
      if (customer === null) {
        setIsReviewCreated(false);
        return;
      }

      for (let desc of reviewData) {
        if (desc.name === customer.name) {
          setIsReviewCreated(true);
          break;
        }
      }

      return;
    }
    // call
    checkIsReviewCreated();

    return;
  });

  useEffect(function () {
    function scrollToTopOfPage() {
      window.scrollTo(0, 0);
      return;
    }
    // call
    scrollToTopOfPage();

    return;
  }, []);

  return (
    <Cell span={8}>
      <Spacer height="4rem" />
      <h1 className="review-heading">Leave a review</h1>

      {isReviewCreated === false && (
        <form onSubmit={handleSubmitForm}>
          <Input
            value={description}
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write here..."
          />

          <Spacer height="1rem" />
        </form>
      )}

      {reviewData.map((r, index) => (
        <div>
          <p className="review-name">{r.name}</p>
          <p className="review-description">{r.description}</p>
          <div className="like-box">
            <span
              className="review-like-icon"
              onClick={function () {
                handleClickReviewLikeData(r.name);
              }}
            >
              {indicesOfLikedReview[index] === true ? (
                <i
                  className="bi bi-hand-thumbs-up-fill"
                  style={{ margin: "0" }}
                ></i>
              ) : (
                <i className="bi bi-hand-thumbs-up" style={{ margin: "0" }}></i>
              )}
            </span>
            {r.peopleWhoLike.length > 0 && (
              <p className="review-likes-count"> {r.peopleWhoLike.length}</p>
            )}
            {r.peopleWhoLike.length > 0 && (
              <p className="review-likers-name">
                {r["peopleWhoLike"][0]["name"]} and more...
              </p>
            )}
          </div>
          <Spacer height="1rem" />
        </div>
      ))}
    </Cell>
  );
}

export default Review;
