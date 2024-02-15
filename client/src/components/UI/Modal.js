import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("root");

const Modal = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>, portalElement
      )}
    </div>
  );
};

export default Modal;