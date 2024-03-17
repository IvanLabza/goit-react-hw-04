import Modal from "react-modal";
import css from "./ImageModal.module.css";

const ImageModal = ({ alt_description, modalIsOpen, closeModal, urls }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: 20,
      paddingRight: 7,
      paddingLeft: 7,
      paddingTop: 0,
      paddingBottom: 0,
      border: "none",
      backgroundColor: "transparent",
    },
  };
  return (
    <Modal
      style={customStyles}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
    >
      <div className={css.wraps}>
        <div className={css.modal}>
          <div>
            <img src={urls.regular} alt={alt_description} />
            <p>{alt_description}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
