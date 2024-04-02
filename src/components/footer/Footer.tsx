import "../../App.css";
import {
  IconBrandDiscord,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer id="footer" className="footer scroll">
      <div className="footer__content">
        <h4 className="title-word title-word-3">Join us</h4>
        <ul className="footer social-icons">
          <li>
            <a className="facebook" href="#">
              <IconBrandFacebook />
            </a>
          </li>
          <li>
            <a className="twitter" href="#">
              <IconBrandTwitter />
            </a>
          </li>
          <li>
            <a className="discord" href="#">
              <IconBrandDiscord />
            </a>
          </li>
          <li>
            <a className="linkedin" href="#">
              <IconBrandLinkedin />
            </a>
          </li>
        </ul>
        <div className="footer-content__text">
          <p>Privacy </p>
          <p> Terms of Use</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
