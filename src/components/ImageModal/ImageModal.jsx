import Modal from "react-modal";
import css from "./ImageModal.module.css";

const ImageModal = ({ imageModal, modalIsOpen, closeModal }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: 15,
      padding: 0,
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
      <div className={css.modal}>
        <div>
          <img src={imageModal.urls.regular} alt={imageModal.alt_description} />
          <p>{imageModal.alt_description}</p>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
