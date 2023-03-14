import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ColapsedContainer = styled.div`
  display: none;
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: blue;
    padding-top: 30%;
  }
`;

const NavbarLinkInternalColapse = styled(Link)`
  color: #000;
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 14px;

  &:hover {
    color: #000;
    width: 100%;
    padding: 10px;
    background: #fff;
    transition: 0.5s ease-out;
  }
`;
const Colapse = (props) => {
  return (
    <ColapsedContainer>
      {Array.from(props.general).map(([key, value]) => (
        <Fragment key={key}>
          <NavbarLinkInternalColapse to={value}>
            {key}
          </NavbarLinkInternalColapse>
        </Fragment>
      ))}

      {props.user ? (
        <Fragment>
          {Array.from(props.roles).map(([key, value]) => (
            <Fragment key={key}>
              {value.roles.find((role) => props.user.roles.includes(role)) && (
                <NavbarLinkInternalColapse to={value.path}>
                  {key}
                </NavbarLinkInternalColapse>
              )}
            </Fragment>
          ))}
        </Fragment>
      ) : (
        <Fragment>
          {Array.from(props.guest).map(([key, value]) => (
            <Fragment key={key}>
              <NavbarLinkInternalColapse to={value}>
                {key}
              </NavbarLinkInternalColapse>
            </Fragment>
          ))}
        </Fragment>
      )}
    </ColapsedContainer>
  );
};

export default Colapse;
