import "./index.css";
const ThumbnailItem = (props) => {
  const { imageDetails, isSelected, clickSelectedIamge } = props;
  const { id, thumbnailUrl, thumbnailAltText } = imageDetails;
  //console.log(isSelected);

  const onSelectImage = () => {
    clickSelectedIamge(id);
  };

  const selectedImageStyle = isSelected ? "active" : "not-selected";
  return (
    <>
      <li className="thumbnail-list-item">
        <button className="thumbnail-button" onClick={onSelectImage}>
          <img
            src={thumbnailUrl}
            alt={thumbnailAltText}
            className={`thumbnail ${selectedImageStyle}`}
          />
        </button>
      </li>
    </>
  );
};

export default ThumbnailItem;
