// libraries
import { useNavigate } from "react-router-dom";
import { Button } from "baseui/button";
import { Cell } from "baseui/layout-grid";

// components
import Spacer from "../../shared/spacer";

// css
import "./confirmation-message.css";

function ConfirmationMessage() {
  const navigate = useNavigate();

  async function handleClickContinueShopping(e) {
    return navigate("/");
  }

  return (
    <Cell span={6}>
      <h1 className="confirmation-message-header">
        Thank you for your purchase!
      </h1>

      <Spacer height="1rem" />

      <div className="confirmation-message-continue-shopping">
        <Button onClick={handleClickContinueShopping}>CONTINUE SHOPPING</Button>
      </div>
    </Cell>
  );
}

export default ConfirmationMessage;
