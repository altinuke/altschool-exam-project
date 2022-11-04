import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles.css";

import Pagination from "../components/Pagination";
import RepoInfo from "./RepoInfo";

const Portfolio = () => {
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  useEffect(() => {
    fetch("https://api.github.com/users/altinuke/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = repos.slice(firstPostIndex, lastPostIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <RepoInfo repos={currentPosts} />
      <Pagination postsPerPage={postsPerPage} totalPosts={repos.length} paginate={paginate}/>
      
      <Outlet/>
    </>

  );
};

export default Portfolio;
