
import React, { useEffect, useState } from "react";
import ArticleListItem from "../ArticleListItem/ArticleListItem";
import { isEmpty } from "lodash";

const ArticleList = (props) => {
  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://demo1390455.mockable.io/articles"
      );
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  let displayContent;

  if (!isEmpty(fetchedData)) {
    displayContent = (
      <ul>
        {Object.values(fetchedData).map((item) =>
          <li key={item.slug}> {ArticleListItem(item)} </li>)}

      </ul>
    );
  } else {
    displayContent = <div>You have no data!</div>;
  }

  return (
    <section>
      {displayContent}
    </section>
  );
};

export default ArticleList;
