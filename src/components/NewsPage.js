import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
const NewsPage = ({ apiUrl }) => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(apiUrl);
        setNews(response.data.articles);
      } catch (error) {
        console.error("Error fetching news", error);
      }
    };

    fetchNews();
  }, [apiUrl]);

  return (
    <>
      {news.map((article, index) => (
        <div className="header" key={index}>
          <div className="header__data">
            <p className="header__public">{article.author}</p>
            <p className="header__public">
              {" "}
              {moment(article.publishedAt).format("MMMM Do YYYY, h:mm:ss a")}
            </p>
          </div>
          <a
            className="header__link"
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="header__title">{article.title}</h2>
          </a>
        </div>
      ))}
    </>
  );
};

export default NewsPage;
