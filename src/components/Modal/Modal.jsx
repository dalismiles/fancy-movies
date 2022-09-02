import Button from "../Button";
import "./index.css";

const Modal = ({ setModalVisibility, data }) => {
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
        <div className="Modal__title">
          <span className="Modal__TextContent--sub"> title: </span>
          <span className="Modal__TextContent--title"> {data.title} </span>
        </div>
        <div className="Modal__orTitle">
          <span className="Modal__TextContent--sub">original title:</span>
          <span className="Modal__TextContent--title">
            {data.original_title}
          </span>
        </div>
        <p className="Modal__TextContent--des"> {data.overview} </p>
        <div className="Modal__btns">
          <Button
            onHandleClick={onCancelBtn}
            btnTextContent="CLOSE"
            color="lightgrey"
            type="button"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
