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
    },
  };
  return (
    <div className="backdrop"  onClick={closeModal}>
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <div className={css.modal}>
          <div>
            <img
              src={imageModal.urls.regular}
              alt={imageModal.alt_description}
            />
          </div>

          <p>{imageModal.description}</p>
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
