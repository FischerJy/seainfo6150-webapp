import React from "react";
import styles from "./ArticleImage.module.css";

const ArticleImage = (props) => {
  return (
    <div>
      <img src={props.articleImage} alt={props.imageTitle} />
    </div>
  );
};
export default ArticleImage;
