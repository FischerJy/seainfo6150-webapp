import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import DynamicArticle from "./DynamicArticle/DynamicArticle.jsx";
import { isEmpty } from "lodash";
import ArticleList from "./ArticleList/ArticleList";

function App() {
  const [fetchedData, setFetchedData] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      
      // performs a GET request
      const response = await fetch("http://demo1390455.mockable.io/articles");
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      setMessage("You have no data!")
      fetchData();
    }
  }, [fetchedData]);

  let SelectArticle;
  return isEmpty(fetchedData) ? <div>{message}</div> : (
    <div className="App">
      <Switch>
        <Route exact path={`/articlelist`}>  <ArticleList article={Object.values(fetchedData)}></ArticleList>
        </Route>
        <Route
          path={`/articlelist/:slug`}
          render={({ match }) => { 

            // getting the parameters from the url and passing
            // down to the component as props

            {Object.values(fetchedData).filter(data =>  data["slug"] === match.params.slug).map(filtereddata => (
              SelectArticle = filtereddata ))} 
            return <div><DynamicArticle article={SelectArticle} /></div>;
          }}
        />
        <Route>
          <DynamicArticle article={Object.values(fetchedData)[1]} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
