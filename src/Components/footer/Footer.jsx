import { Facebook, Instagram, Mail } from "@material-ui/icons";
import "./css/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerbox">
          <div className="logosection">
            <h2>Hibernation Hack</h2>
            <img
              src=""
              alt=""
              className="footer_logo"
            />
          </div>

          <div className="bottom_section">
            <div className="right_section">
              <h5>© 2022 Hibernation Hack. All rights reserved.</h5>
            </div>
            <div className="left_section">
              <div className="social_media">
                <Facebook style={{ fontSize: 30, paddingRight: 20 }} />
                <Instagram  style={{ fontSize: 30, paddingRight: 20 }}/>
                <Mail  style={{ fontSize: 30, paddingRight: 20 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
