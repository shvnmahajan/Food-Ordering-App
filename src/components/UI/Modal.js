import classes from "./Modal.module.css";
import reactDom from "react-dom";

const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const BackDrop = (props) => {
  return <div className={classes.backdrop} />;
};

const Modal = (props) => {
  const overlayElement = document.getElementById("overlays");
  return (
    <>
      {reactDom.createPortal(<BackDrop />, overlayElement)}
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlayElement
      )}
    </>
  );
};

export default Modal;
