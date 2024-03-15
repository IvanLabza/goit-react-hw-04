import ImageCard from "./ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <div>
      <ul className={css.gallery}>
        {images.map((image) => (
          <ImageCard
            key={image.id}
            small={image.urls.small}
            description={image.alt_description}
          />
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
