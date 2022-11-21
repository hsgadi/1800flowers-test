import { Spin } from "antd";
import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Articles from "./Articles";
import Search from "./Search";

const applyFilter = (searchTerm) => (article) =>
  article.title.toLowerCase().includes(searchTerm.toLowerCase());

const App = ({ articles, searchTerm, onSearch, onUpdate }) => {
  async function getUser() {
    try {
      const response = await axios.get(
        "http://jsonplaceholder.typicode.com/posts"
      );
      onUpdate(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  const updateArticles = (data) => {
    articles.map((article) => (article.id === data.id ? data : article));
    onUpdate(articles);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <h1 className="mb-5">1800Flowers Test</h1>

      <Search value={searchTerm} onSearch={onSearch} />
      {articles ? (
        <Articles
          onArticleUpdate={updateArticles}
          articles={articles.filter(applyFilter(searchTerm))}
        />
      ) : (
        <Spin />
      )}
    </>
  );
};

// connecting view layer to state layer with react-redux

const mapStateToProps = (state) => ({
  articles: state.articlesState.articles,
  searchTerm: state.searchState.searchTerm,
});

const mapDispatchToProps = (dispatch) => ({
  onSearch: (searchTerm) => dispatch({ type: "SEARCH_SET", searchTerm }),
  onUpdate: (articles) => dispatch({ type: "UPDATE_SET", articles }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
