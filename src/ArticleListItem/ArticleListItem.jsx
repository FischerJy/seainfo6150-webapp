import React from "react";

function ArticleListItem(props) {
  return (
    <article>
      <h1>{props.articlelist.title}</h1>
      <time dateTime={props.articlelist.timeStamp}>
        {props.articlelist.displayDate}
      </time>
      <p>{props.articlelist.shortText}</p>
    </article>
  );
}
export default ArticleListItem;
