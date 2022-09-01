import { useState } from "react";
import Modal from "../Modal/Modal";
import "./index.css";

const MainCard = ({ cardData, cardStyle = {} }) => {
  const { original_title, title, vote_average, poster_path } = cardData;

  const [isModalVisible, setModalVisibility] = useState(false);
  return (
    <div className="MainCard" style={cardStyle}>
      <img
        onClick={() => setModalVisibility(true)}
        className="MainCard--img"
        src={`https://image.tmdb.org/t/p/w342${poster_path}`}
        alt={title}
      />
      <div className="MainCard__text">
        <h3 style={{ fontSize: cardStyle.fontSize }}>{original_title}</h3>
        <p>{vote_average}</p>
      </div>
      {isModalVisible && <Modal setModalVisibility={setModalVisibility} />}
    </div>
  );
};

export default MainCard;
