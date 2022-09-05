import Button from "../Button";
import "./index.scss";

const Modal = ({ data, setModalVisibility }) => {
  const onCancelBtn = () => {
    setModalVisibility(false);
  };

  return (
    <div className="Modal__overlay">
      <div className="Modal">
        <img
          className="Modal__img"
          src={`https://image.tmdb.org/t/p/w342${data.poster_path}`}
          alt={data.title}
        />
        <div className="Modal__Title">
          <span className="Modal__Title--sub"> title: </span>
          <span className="Modal__Title--main"> {data.title} </span>
        </div>
        <div className="Modal__Title">
          <span className="Modal__Title--sub">original title:</span>
          <span className="Modal__Title--main">
            {data.original_title}
          </span>
        </div>
        <p className="Modal__Description"> {data.overview} </p>
        <Button
          onHandleClick={onCancelBtn}
          btnTextContent="CLOSE"
          color="rgb(38, 10, 59)"
          type="button"
          className="Modal__btns"
        />
      </div>
    </div>
  );
};

export default Modal;
