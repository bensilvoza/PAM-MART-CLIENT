// libraries
import { useNavigate } from "react-router-dom";
import { Cell } from "baseui/layout-grid";
import { Button, SIZE } from "baseui/button";

// css
import "./welcome-section.css";

function WelcomeSection() {
  const navigate = useNavigate();

  let customer = JSON.parse(localStorage.getItem("customer"));

  function handleClickLogout() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("customer");
    return navigate("/");
  }

  return (
    <Cell span={12}>
      <p className="welcome-section-name">Hello! {customer["name"]}</p>
      <Button
        className="welcome-section-logout"
        onClick={handleClickLogout}
        size={SIZE.mini}
      >
        LOGOUT
      </Button>
    </Cell>
  );
}

export default WelcomeSection;
