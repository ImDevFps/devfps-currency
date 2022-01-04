import React, { useState, useEffect } from "react";
import { BlogsPageContainer } from "./BlogsPage.styles";
import Blogs from "./../../components/Blogs/Blogs";
import Pagination from "./../../components/Pagination/Pagination";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 8;

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      await fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=EN")
        .then((res) => res.json())
        .then((result) => setBlogs(result));

      setLoading(false);
    };
    fetchBlog();

    return () => fetchBlog();
  }, []);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs =
    blogs && blogs.Data.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalBlogs = blogs && blogs.Data.length;

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <BlogsPageContainer>
      <Blogs blogs={currentBlogs} loading={loading} />
      <Pagination
        blogsPerPage={blogsPerPage}
        totalBlogs={totalBlogs}
        paginate={paginate}
        active={currentPage}
      />
    </BlogsPageContainer>
  );
};

export default BlogsPage;
