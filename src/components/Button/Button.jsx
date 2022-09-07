import styles from "./index.module.scss";

const Button = ({
  btnTextContent = "Click",
  color = "ghostwhite",
  type = "button",
  onHandleClick = () => {},
}) => {
  return (
    <button
      onClick={onHandleClick}
      type={type}
      className={styles.Button}
      style={{ backgroundColor: color }}
    >
      {btnTextContent}
    </button>
  );
};

export default Button;
