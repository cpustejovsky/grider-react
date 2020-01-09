import React from "react";
import ImageCard from "./ImageCard";
import "../index.css";
const ImageList = props => {
  console.log(props.images);

  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image}/>
  }
  );
  return (
    <div>
      <h1>Images Found: {props.images.length}</h1>
      <div className="image-list">{images}</div>
    </div>
  );
};

export default ImageList;
