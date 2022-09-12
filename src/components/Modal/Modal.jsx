import Button from "../Button";
import styles from "./index.module.scss";

const Modal = ({ data, setModalVisibility }) => {
  const onCancelBtn = () => {
    setModalVisibility(false);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.Modal}>
        <img
          className={styles.img}
          src={`https://image.tmdb.org/t/p/w342${data.poster_path}`}
          alt={data.title}
        />
        <div className={styles.Title}>
          <span className={styles.sub}> title: </span>
          <span className={styles.main}> {data.title} </span>
        </div>
        <div className={styles.Title}>
          <span className={styles.sub}>original title:</span>
          <span className={styles.main}>{data.original_title}</span>
        </div>
        <p className={styles.Description}> {data.overview} </p>
        <Button
          onHandleClick={onCancelBtn}
          btnTextContent="CLOSE"
          color="red"
          type="button"
          className={styles.btns}
        />
      </div>
    </div>
  );
};

export default Modal;
