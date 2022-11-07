// libraries
import { useNavigate } from "react-router-dom";
import { Grid, Cell } from "baseui/layout-grid";

// css
import "./nav.css";

function Nav() {
  const navigate = useNavigate();

  function handleClickProducts() {
    return navigate("/products");
  }

  function handleClickPammart() {
    return navigate("/");
  }

  function handleClickCart() {
    return navigate("/cart");
  }

  return (
    <Grid>
      <Cell span={12}>
        <div className="nav">
          <div>
            <p onClick={handleClickPammart} className="nav-brand">
              Pam mart
            </p>
          </div>
          <div className="nav-item-box">
            <p onClick={handleClickProducts} className="nav-item">
              Products
            </p>
            <p onClick={handleClickCart} className="nav-item">
              Cart
            </p>
            <p className="nav-item">Search</p>
            <p className="nav-item">Account</p>
          </div>
        </div>
      </Cell>
    </Grid>
  );
}

export default Nav;
