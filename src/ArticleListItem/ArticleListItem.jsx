import React from "react";

const ArticleListItem = (props) => {
  return (
    <article>
     <header>
       <h1>{props.title}</h1>
     </header>
     <time dateTime={props.timeStamp}>{props.displayDate}</time>
     <p>{props.shortText}</p>
    </article>
  )
}

export default ArticleListItem;
