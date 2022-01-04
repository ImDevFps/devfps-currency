import React from "react";
import { ReactComponent as Logo } from "../../logo.svg";
import { HeaderContainer, LogoContainer, NavBar } from "./Header.styles";
import { Container, Nav, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <NavBar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container>
          <LogoContainer to='/'>
            <Logo />
          </LogoContainer>
          <NavBar.Toggle aria-controls='responsive-navbar-nav' />
          <NavBar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/#pricing'>Pricing</Nav.Link>
              <NavLink as={Link} to='/blog'>
                Blog
              </NavLink>
              <NavLink as={Link} to='/features'>
                Features
              </NavLink>
            </Nav>
            <Nav>
              <NavLink as={Link} to='/'>
                Contacts
              </NavLink>
            </Nav>
          </NavBar.Collapse>
        </Container>
      </NavBar>
    </HeaderContainer>
  );
};

export default Header;
