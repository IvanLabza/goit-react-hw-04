const ImageCard = ({ small, title }) => {
  return (
    <li className="galleryCard" >
      <img width={300} src={small} alt={title} />
    </li>
  );
};

export default ImageCard;
