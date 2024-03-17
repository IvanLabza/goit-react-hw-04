import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <div>
      <ul className={css.gallery}>
        {images.map((image, i) => (
          <li key={image.id + i}>
            <ImageCard
              small={image.urls.small}
              description={image.alt_description}
              openModal={openModal}
              image={image}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
