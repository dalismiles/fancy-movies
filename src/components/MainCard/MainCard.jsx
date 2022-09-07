import { memo, useState } from "react";
import Modal from "../Modal";
import styles from "./index.module.scss";

const MainCard = ({ cardData, cardStyle = {} }) => {
  const { original_title, title, vote_average, poster_path } = cardData;

  const [isModalVisible, setModalVisibility] = useState(false);

  return (
    <>
      <div
        className={styles.MainCard}
        style={cardStyle}
        onClick={() => setModalVisibility(true)}
      >
        <img
          className={styles.img}
          src={`https://image.tmdb.org/t/p/w342${poster_path}`}
          alt={title}
        />
        <div className={styles.text}>
          <h3 style={{ fontSize: cardStyle.fontSize }}>{original_title}</h3>
          <p>{vote_average}</p>
        </div>
      </div>
      {isModalVisible && (
        <Modal data={cardData} setModalVisibility={setModalVisibility} />
      )}
    </>
  );
};

export default memo(MainCard);
