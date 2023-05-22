import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound.js";
import HomePage from "./components/HomePage.js";
import Submit from "./components/Form/Submit";
import NewsPage from "./components/NewsPage";
import Filter from "./components/Filter/Filter";
const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/submit" element={<Submit />} />
          <Route
            path="/New"
            element={
              <NewsPage apiUrl="https://newsapi.org/v2/top-headlines?country=ua&apiKey=2abd05bf6fa54970bacb9e1624439365" />
            }
          />
          <Route
            path="/Past"
            element={
              <NewsPage apiUrl="https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2abd05bf6fa54970bacb9e1624439365" />
            }
          />
          <Route
            path="/BestStories"
            element={
              <NewsPage apiUrl="https://newsapi.org/v2/top-headlines?country=ua&apiKey=2abd05bf6fa54970bacb9e1624439365&category=sports" />
            }
          />
          <Route path="/Filter" element={<Filter />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
