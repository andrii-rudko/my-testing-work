import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

import "./style.scss";

const Filter = () => {
  const [country, setCountry] = useState(null);
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState(null);

  const countryCodes = {
    Ukraine: "ua",
    USA: "us",
    Japan: "jp",
  };

  const categoryCodes = {
    business: "business",
    entertainment: "entertainment",
    general: "general",
    health: "health",
    sports: "sports",
  };

  const categoryCode = categoryCodes[category] || "";

  const countryCode = countryCodes[country] || "jp";

  const apiUrl = `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=2abd05bf6fa54970bacb9e1624439365&category=${categoryCode}`;

  useEffect(() => {
    const fetchNews = async () => {
      if (!country) {
        return;
      }
      try {
        const response = await axios.get(apiUrl);
        setNews(response.data.articles);
      } catch (error) {
        console.error("Error fetcing news", error);
      }
    };
    fetchNews();
  }, [apiUrl, country, setNews]);

  const handleChangeCountry = (e) => {
    setCountry(e.target.value);
  };
  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <>
      <select
        className="custom-select"
        value={country}
        onChange={handleChangeCountry}
      >
        <option value="">Виберіть країну</option>
        <option value="USA">USA</option>
        <option value="Ukraine">Ukraine</option>
        <option value="Japan">Japan</option>
      </select>
      <select
        className="custom-select"
        value={category}
        onChange={handleChangeCategory}
      >
        <option value="">Виберіть категорію</option>
        <option value="business">Бізнес</option>
        <option value="entertainment">Розваги</option>
        <option value="general">Загальні</option>
        <option value="health">Здоровʼя</option>
        <option value="sports">Спорт</option>
      </select>
      {news.map((article) => (
        <div className="header">
          <a
            className="header__link"
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="header__title">{article.title}</h2>
          </a>
          <div className="header__data">
            <p className="header__public">{article.author}</p>
            <p className="header__public">
              {" "}
              {moment(article.publishedAt).format("MMMM Do YYYY, h:mm:ss a")}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Filter;
