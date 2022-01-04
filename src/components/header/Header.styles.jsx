import styled from "styled-components";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

export const HeaderContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
`;

export const NavBar = styled(Navbar)`
  width: 100%;
`;
