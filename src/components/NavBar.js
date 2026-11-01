import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  // Close menu when route changes
  useEffect(() => {
    setToggle(false);
  }, [location.pathname]);

  // Close menu when Escape is pressed
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setToggle(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <Wrapper ref={navRef}>
        {/* Brand / Logo */}
        <Brand to="/">WeCare Centre</Brand>

        {/* Desktop Navigation */}
        <DesktopNav>
          <NavItem to="/service" $active={location.pathname === "/service"}>
            Programs
          </NavItem>

          <NavItem to="/about" $active={location.pathname === "/about"}>
            About
          </NavItem>
        </DesktopNav>

        {/* Mobile Menu Button */}
        <MenuButton
          type="button"
          onClick={() => setToggle((prev) => !prev)}
          aria-label={toggle ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={toggle}
          aria-controls="mobile-navigation"
        >
          {toggle ? <CloseIcon /> : <MenuIcon />}
        </MenuButton>

        {/* Mobile Navigation */}
        <MobileNav
          id="mobile-navigation"
          $open={toggle}
          aria-hidden={!toggle}
          inert={!toggle}
        >
          <MobileNavItem
            to="/service"
            $active={location.pathname === "/service"}
            tabIndex={toggle ? 0 : -1}
          >
            Programs
          </MobileNavItem>

          <MobileNavItem
            to="/about"
            $active={location.pathname === "/about"}
            tabIndex={toggle ? 0 : -1}
          >
            About
          </MobileNavItem>
        </MobileNav>
      </Wrapper>
    </Container>
  );
};

export default NavBar;

// ========================================
// STYLED COMPONENTS
// ========================================

const Container = styled.header`
  width: 100%;
  height: 70px;
  background-color: whitesmoke;
  font-family: "Urbanist", sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
`;

const Wrapper = styled.nav`
  width: 100%;
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 18px;
  }
`;

const Brand = styled(Link)`
  color: #ff8624;
  font-size: 25px;
  font-weight: 800;
  text-decoration: none;
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 21px;
  }
`;

const DesktopNav = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled(Link)`
  color: ${({ $active }) => ($active ? "#ff8624" : "#333")};
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  position: relative;
  transition: color 0.2s ease;

  &:hover {
    color: #ff8624;
  }

  &::after {
    content: "";
    position: absolute;
    width: ${({ $active }) => ($active ? "100%" : "0")};
    height: 2px;
    bottom: -6px;
    left: 0;
    background-color: #ff8624;
    transition: width 0.2s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: #333;
  cursor: pointer;
  padding: 8px;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 30px;
  }

  @media (max-width: 768px) {
    display: flex;
  }

  &:focus-visible {
    outline: 2px solid #ff8624;
    outline-offset: 3px;
    border-radius: 4px;
  }
`;

const MobileNav = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background-color: whitesmoke;
    padding: ${({ $open }) => ($open ? "15px 20px" : "0 20px")};
    box-sizing: border-box;
    box-shadow: ${({ $open }) =>
      $open ? "0 5px 12px rgba(0, 0, 0, 0.12)" : "none"};
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
    transform: translateY(${({ $open }) => ($open ? "0" : "-10px")});
    pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
    transition:
      opacity 0.25s ease,
      transform 0.25s ease,
      padding 0.25s ease,
      visibility 0.25s ease;
    gap: 18px;
    z-index: 1001;
  }
`;

const MobileNavItem = styled(Link)`
  color: ${({ $active }) => ($active ? "#ff8624" : "#333")};
  font-size: 17px;
  font-weight: 700;
  text-decoration: none;
  padding: 10px 0;
  transition: color 0.2s ease;

  &:hover {
    color: #ff8624;
  }

  &:focus-visible {
    outline: 2px solid #ff8624;
    outline-offset: 3px;
  }
`;
