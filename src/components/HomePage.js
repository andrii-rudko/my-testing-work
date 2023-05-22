import React from "react";
import NewsPage from "./NewsPage";

const HomePage = () => {
  return (
    <>
      <NewsPage apiUrl="https://newsapi.org/v2/top-headlines?country=ua&apiKey=2abd05bf6fa54970bacb9e1624439365&category=sports" />
    </>
  );
};

export default HomePage;
