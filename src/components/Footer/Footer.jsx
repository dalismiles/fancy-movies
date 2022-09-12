import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaCaretSquareRight,
} from "react-icons/fa";
import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.links}>
        <ul>
          <li>Account</li>
          <li>About us</li>
          <li>Help center</li>
          <li>FAQ</li>
          <li>Subscription</li>
          <li>Contact Us</li>
          <li>Media Center</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Careers</li>
          <li>Speed Test</li>
          <li>Only on DBMovie</li>
        </ul>
      </div>

      <div className={styles.main}>
        <h1>
          <FaCaretSquareRight /> DBMOVIE / v.2022
        </h1>
        <div className={styles.socialIcons}>
          <a href="https://www.linkedin.com/in/dalilaiapichino/">
            <FaLinkedinIn />
          </a>
          <a href="https://www.instagram.com/dalismiles/">
            <FaInstagram />
          </a>
          <a href="https://github.com/dalismiles">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
