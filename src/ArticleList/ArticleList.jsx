import React from "react";
import ArticleListItem from "../ArticleListItem/ArticleListItem.jsx";

function ArticleList(props) {

  let displayContent = (
    <ul>
      {props.article.map((article) => (
        <li key={article.slug}>
          <ArticleListItem articlelist={article}></ArticleListItem>
        </li>
      ))}
    </ul>
  );

  return <section>{displayContent}</section>;
}
export default ArticleList;

