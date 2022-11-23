// libraries
import { Cell } from "baseui/layout-grid";

// components
import Spacer from "../shared/spacer";

// css
import "./feedback.css";

function Feedback() {
  return (
    <>
      <Cell span={12}>
        <Spacer height="4rem" />

        <div className="feedback-box">
          <p className="feedback-description">
            We’d love to hear what you think. Give feedback.
          </p>
        </div>
      </Cell>
    </>
  );
}

export default Feedback;
