import React from "react";
import { NavContainer, PaginationContainer } from "./Pagination.styles";

const Pagination = ({ blogsPerPage, totalBlogs, paginate, active }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <NavContainer>
      <PaginationContainer>
        {pageNumbers.map((number) => (
          <PaginationContainer.Item
            key={number}
            onClick={() => paginate(number)}
            active={number === active}>
            {number}
          </PaginationContainer.Item>
        ))}
      </PaginationContainer>
    </NavContainer>
  );
};

export default Pagination;
