// css
import "./footer.css";

function Footer(props) {
  return (
    <div className="footer-box">
      <div className="footer-box-item">
        <div className="footer-item">About Us</div>
        <div className="footer-item">FAQ</div>
        <div className="footer-item">Help</div>
        <div className="footer-item">Contacts</div>
        <div>Terms & Conditions</div>
      </div>
      <div className="footer-box-brand">
        <div>
          <span className="footer-brand">Pam mart. </span>
          All Rights Reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
