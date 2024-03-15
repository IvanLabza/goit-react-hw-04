import css from "../ImageGallery.module.css";
const ImageCard = ({ small, title }) => {
  return (
      <div className={css.galleryCard} >
      <img width={300} src={small} alt={title} />
    </div>
  );
};

export default ImageCard;
