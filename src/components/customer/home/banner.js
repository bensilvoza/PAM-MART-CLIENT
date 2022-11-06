// libraries
import { Cell } from "baseui/layout-grid";

// components
import Spacer from "../shared/spacer";

// css
import "./banner.css";

function Banner() {
  return (
    <>
      <Cell span={12}>
        <Spacer height="2rem" />
      </Cell>
      <Cell span={6}>
        <p className="banner-title">
          Christmas decorations for jolly holidays at home
        </p>
        <p className="banner-description">
          Christmas has come and we're all excited to deck the halls with
          sparkling new decorations to brighten up the season. Explore our
          collections of new holiday adornments and make this year's Yuletide
          season your most memorable yet!
        </p>
      </Cell>

      <Cell span={6}>
        <img src="https://www.ikea.com/ext/ingkadam/m/62d66e4bd7e8dfc0/original/PH187667.jpg?f=xl" />
      </Cell>
    </>
  );
}

export default Banner;
