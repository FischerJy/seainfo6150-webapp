import React from "react";
import { Link } from "react-router-dom";
import HTMLText from "../HTMLText/HTMLText";

const DynamicArticle = (props) => {
  return (
    <article>
      <Link to={`/ArticleList`}>Back</Link>
      <header>
      
        <h1>{props.article.title}</h1>
        <address>
          by {props.article.author} (
          <a href={props.article.authorEmail}>{props.article.authorEmail}</a>)
          <br />
        </address>
        <time dateTime={props.article.timeStamp}>{props.article.displayDate}</time>
      </header>
      <HTMLText text={props.article.text} />
    </article>
  );
};

export default DynamicArticle;
