import ImageCard from "./ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <div>
      <ul className={css.gallery}>
        {images.map((image) => (
          <li key={image.id}>
            <ImageCard
              small={image.urls.small}
              description={image.alt_description}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
