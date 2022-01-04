import React from "react";
import BlogsItem from "./../BlogsItem/BlogsItem";
import { BlogsContainer } from "./Blogs.styles";

const Blogs = ({ blogs, loading }) => {
  return (
    <BlogsContainer>
      {blogs &&
        blogs.map((blog) => (
          <BlogsItem key={blog.id} blog={blog} loading={loading} />
        ))}
    </BlogsContainer>
  );
};

export default Blogs;
