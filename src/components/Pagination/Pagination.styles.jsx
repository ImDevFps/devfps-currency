import styled from "styled-components";
import Pagination from "react-bootstrap/Pagination";

export const NavContainer = styled.nav``;

export const PaginationContainer = styled(Pagination)`
  font-size: 18px;
  .active .page-link {
    background-color: #ff5252;
    border-color: #ff5252;
  }

  a {
    color: black;
  }
`;
