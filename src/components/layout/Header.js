import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../svg/logo.svg";
import cart from "../svg/cart.svg";
import { useHistory } from "react-router-dom";
import DataContext from "../../data/DataContext";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const { isLoggedIn, totalItems, signOut } = useContext(DataContext);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header id="header">
      <Navbar color="light" light expand="md">
        <NavbarBrand
          onClick={() => history.push("/")}
          alt="Meijer Produce"
          className="logo"
        >
          <img src={logo} alt="Meijer Produce" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar></Nav>
          <Nav className="justify-content-end" navbar>
            <NavItem>
              <NavLink onClick={() => history.push("/")}>Produce</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => history.push("/about")}>About</NavLink>
            </NavItem>
            {!isLoggedIn && (
              <NavItem>
                <NavLink onClick={() => history.push("/login")}>Login</NavLink>
              </NavItem>
            )}
            {!isLoggedIn && (
              <NavItem>
                <NavLink onClick={() => history.push("/register")}>Sign up</NavLink>
              </NavItem>
            )}
            {isLoggedIn && (
              <NavItem>
                <NavLink  onClick={signOut}>
                    Logout
                  </NavLink>
              </NavItem>
            )}
            {isLoggedIn && (
              <NavItem>
                <NavLink onClick={() => history.push("/cart")}className="align-top">
                  {totalItems > 0 && (
                    <span className="pl-3 pr-1">{totalItems}</span>
                  )}
                  <img src={cart} alt="" width="20" height="20" />
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};
export default Header;
