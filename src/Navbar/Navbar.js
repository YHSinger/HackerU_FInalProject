import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Colapse from "./Colapse";
import useLogin from "../hooks/useLogin";

const Nav = styled.div`
  background: yellow;
  grid-area: nav;
  padding: 0rem;
`;

const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: flex-end;
`;

const NavbarLeftContainer = styled.div`
  display: flex;
  flex: 70%;
  padding-left: 5%;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0px 0px;
  min-height: 100vh;
  @media screen and (max-width: 960px) {
    padding: 0 10px;
  }
`;
const NavbarLinkInternal = styled(Link)`
  color: black;
  font-size: 25px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  text-decoration: none;
  margin: 20px;
  &:hover {
    background: none;
    color: red;
    transition: 0.5s ease-out;
  }
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 5px;

  @media (max-width: 900px) {
    display: none;
  }
`;

const OpenLinks = styled.button`
  width: 75px;
  position: relative;
  top: 0;
  right: 0;
  height: 80px;
  background: none;
  font-size: 60px;
  cursor: pointer;
  border: none;
  z-index: 100;
  color: black;
  @media (min-width: 700px) {
    display: none;
  }
`;

const userRoles = new Map([
  ["Favorites", { roles: ["user", "business"], path: "/favorites" }],
  ["Dashboard", { roles: ["business"], path: "/dashboard" }],
  ["Profile", { roles: ["business"], path: "/profile" }],
  ["Logout", { roles: ["user", "business"], path: "/logout" }],
]);

const guestMap = new Map([
  ["Sign In", "/signin"],
  ["Register", "/Signup"],
]);

const NavbarRight = ({ user }) => {
  return (
    <RightContainer>
      {user ? (
        <Container>
          {Array.from(userRoles).map(([key, value]) => (
            <Fragment key={key}>
              {value.roles.find((role) => user.roles.includes(role)) && (
                <NavbarLinkInternal to={value.path}>{key}</NavbarLinkInternal>
              )}
            </Fragment>
          ))}
        </Container>
      ) : (
        <Container>
          {Array.from(guestMap).map(([key, value]) => (
            <Fragment key={key}>
              <NavbarLinkInternal to={value}>{key}</NavbarLinkInternal>
            </Fragment>
          ))}
        </Container>
      )}
    </RightContainer>
  );
};

const LeftNavMap1 = new Map([
  ["Home", "/"],
  ["Contact US", "/contactus"],
  ["About US", "/about"],
]);

const NavbarLeft = ({ LeftNavMap }) => {
  return (
    <NavbarLeftContainer>
      <Container>
        {Array.from(LeftNavMap).map(([key, value]) => (
          <Fragment key={key}>
            <NavbarLinkInternal to={value}>{key}</NavbarLinkInternal>
          </Fragment>
        ))}
      </Container>
    </NavbarLeftContainer>
  );
};
const Navbar = () => {
  const { user } = useLogin();
  const [colapse, setColapse] = useState(false);
  return (
    <Nav>
      <NavbarInnerContainer>
        <NavbarLeft LeftNavMap={LeftNavMap1} />
        <NavbarRight user={user} />
        <OpenLinks onClick={() => setColapse((colapse) => !colapse)}>
          {colapse ? <>&#10005;</> : <> &#8801;</>}
        </OpenLinks>
      </NavbarInnerContainer>
      {colapse && (
        <Colapse
          general={LeftNavMap1}
          roles={userRoles}
          guest={guestMap}
          user={user}
        />
      )}
    </Nav>
  );
};

export default Navbar;
