import { useState } from "react";
import ThumbnailItem from "../ThumbnailItem";
import "./index.css";

const imagesList = [
  {
    id: 0,
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-thumbnail-img.png",
    imageAltText: "nature mountain with pond",
    thumbnailAltText: "nature mountain with pond thumbnail",
  },
  {
    id: 1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nature-sunset-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-sunset-thumbnail-img.png",
    imageAltText: "nature sunset",
    thumbnailAltText: "nature sunset thumbnail",
  },
  {
    id: 2,
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-thumbnail-img.png",
    imageAltText: "nature mountain with ocean",
    thumbnailAltText: "nature mountain with ocean thumbnail",
  },
  {
    id: 3,
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-thumbnail-img.png",
    imageAltText: "nature mountain with forest",
    thumbnailAltText: "nature mountain with forest thumbnail",
  },
  {
    id: 4,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nature-leaves-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-leaves-thumbnail-img.png",
    imageAltText: "nature leaves",
    thumbnailAltText: "nature leaves thumbnail",
  },
  {
    id: 5,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nature-tree-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-tree-thumbnail-img.png",
    imageAltText: "nature tree",
    thumbnailAltText: "nature tree thumbnail",
  },
  {
    id: 6,
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-waterfall-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-waterfall-thumbnail-img.png",
    imageAltText: "nature waterfall",
    thumbnailAltText: "nature waterfall thumbnail",
  },
  {
    id: 7,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nature-river-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-river-thumbnail-img.png",
    imageAltText: "nature river",
    thumbnailAltText: "nature river thumbnail",
  },
];

const Gallery = () => {
  const [selectedImageId, setSelectedImageId] = useState(imagesList[0].id);
  const { imageUrl, imageAltText } = imagesList[selectedImageId];
  const clickSelectedIamge = (id) => {
    setSelectedImageId(id);
  };
  return (
    <>
      <div className="app-container">
        <div className="gallery-conatiner">
          <img src={imageUrl} alt={imageAltText} className="selected-image" />
          <h1 className="heading">Nature Photography</h1>
          <p className="paragraph">Nature Photography by Vijay Harsha Made</p>
          <ul className="image-container">
            {imagesList.map((eachImage) => (
              <ThumbnailItem
                imageDetails={eachImage}
                key={eachImage.id}
                isSelected={selectedImageId === eachImage.id}
                clickSelectedIamge={clickSelectedIamge}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Gallery;
