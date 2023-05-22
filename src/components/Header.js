import React from "react";
import { Link, Outlet } from "react-router-dom";
const Header = () => {
  return (
    <>
      <h1>Hacker News</h1>
      <div className="nav-links">
        <Link to="/New" className="n-link">
          New
        </Link>
        <Link to="/Past" className="n-link">
          Past
        </Link>
        <Link to="/Comments" className="n-link">
          Comments
        </Link>
        <Link to="/Ask" className="n-link">
          Ask
        </Link>
        <Link to="/Show" className="n-link">
          Show
        </Link>
        <Link to="/Jobs" className="n-link">
          Jobs
        </Link>
        <Link to="/BestStories" className="n-link">
          Best Stories
        </Link>
        <Link to="/Submit" className="n-link">
          Submit
        </Link>
        <Link to="/Filter" className="n-link">
          Filter
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
