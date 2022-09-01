import Button from "../Button";
import "./index.css";

const Modal = ({ setModalVisibility }) => {
  const onCancelBtn = () => {
    setModalVisibility(false);
  };

  return (
    <div className="Modal__overlay">
      <div className="Modal">
        <p className="Modal__TextContent">modalTextContent</p>
        <div className="Modal__btns">
          <Button
            onHandleClick={onCancelBtn}
            btnTextContent="CLOSE"
            color="lightcoral"
            type="button"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
