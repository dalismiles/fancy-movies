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
  );
};

export default Footer;
