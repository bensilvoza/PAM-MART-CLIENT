// libraries
import { useState } from "react";
import { Cell } from "baseui/layout-grid";

// components
import Spacer from "../shared/spacer";

// utils
import categoryIconUrls from "../../../utils/home/categoryIconUrls";

// css
import "./category.css";

function Category() {
  let [titles, setTitles] = useState([
    "Clothing",
    "Books",
    "Movies",
    "Party",
    "Electronic",
    "Grocery",
    "Sports",
    "Home",
    "Beauty",
  ]);
  let [categoryIcons, setCategoryIcons] = useState(categoryIconUrls);

  return (
    <>
      <Cell span={12}>
        <Spacer height="4rem" />
        <p className="shop-by-category">Shop by category</p>
      </Cell>

      {titles.map((title, index) => (
        <Cell key={title} span={4}>
          <div className="category-box">
            <div className="title">{title}</div>
            <div className="category-icon-box">
              <img className="category-icon" src={categoryIcons[index]} />
            </div>
          </div>
        </Cell>
      ))}
    </>
  );
}

export default Category;
