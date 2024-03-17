import css from "../ImageGallery/ImageGallery.module.css";

const ImageCard = ({ small, title, image, openModal }) => {
  return (
    <div className={css.galleryCard}>
      <img
        onClick={() => {
          openModal(image);
          console.log(image);
        }}
        width={300}
        src={small}
        alt={title}
      />
    </div>
  );
};

export default ImageCard;
