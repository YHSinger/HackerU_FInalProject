import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const FooterSocialIcons = styled.a`
  color: black;
  font-size: 30px;
  margin: 20px;
  &:hover {
    background: none;
    color: white;
  }
`;
const FooterContainer = styled.div`
  background: yellow;
  grid-area: footer;
  padding: 0.25rem;
`;
const FooterWrapper = styled.div`
  margin: 0 auto;
  max-width: 1290px;
`;
const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 900px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
`;
const FooterLinkTitle = styled.h2`
  margin: 16px;
`;

const FooterLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin-bottom: 0.5rem;
  hover: {
    background: none;
    color: white;
    transition: 0.3s ease-out;
  }
`;
const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  @media screen and (max-width: 1000px) {
    align-items: center;
  }
`;
const Rights = styled.div`
  color: ${({ color }) => (color ? color : "#000")};
  width: 100%;
  font-size: 0.9rem;
  border-top: 1px solid ${({ color }) => (color ? color : "#fff")};
  padding: 1rem;
  margin: 2rem 0 0;
`;
const linksMap = new Map([
  [
    "Company",
    [
      { name: "About Us", to: "/" },
      { name: "Contact Us", to: "/" },
      { name: "Advertise with Us", to: "/" },
    ],
  ],
  [
    "TITLE2",
    [
      { name: "Text1", to: "/" },
      { name: "Text1", to: "/" },
      { name: "Text1", to: "/" },
    ],
  ],
  [
    "TITLE3",
    [
      { name: "Text1", to: "/" },
      { name: "Text1", to: "/" },
      { name: "Text1", to: "/" },
    ],
  ],
  [
    "TITLE4",
    [
      { name: "Text1", to: "/" },
      { name: "Text1", to: "/" },
      { name: "Text1", to: "/" },
    ],
  ],
]);

const Icons = ({ icon }) => {
  return (
    <FooterSocialIcons href={icon.value.href} target="_blank">
      {icon.value.tag}
    </FooterSocialIcons>
  );
};

const icons = new Map([
  ["YouTube", { tag: <FaYoutube />, herf: "/" }],
  ["FaceBook", { tag: <FaFacebook />, herf: "/" }],
  ["Instagram", { tag: <FaInstagram />, herf: "/" }],
  ["Twitter", { tag: <FaTwitter />, herf: "/" }],
  ["LinkedIn", { tag: <FaLinkedin />, herf: "/" }],
]);

const Links = ({ link }) => (
  <FooterLinkItems>
    <FooterLinkTitle>{link.key}</FooterLinkTitle>
    {link.value.map((val, index) => (
      <FooterLink key={index} to={val.to}>
        {val.name}
      </FooterLink>
    ))}
  </FooterLinkItems>
);

const rightsName = (key, value) => {
  const fullName = new Map([[key, value]]);
  return fullName.get(key);
};

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterGrid>
          {Array.from(linksMap).map(([key, value]) => (
            <Links key={key} link={{ key, value }} />
          ))}
        </FooterGrid>
        <div style={{ margin: "50px" }}>
          {Array.from(icons).map(([key, value]) => (
            <Icons key={key} icon={{ key, value }} />
          ))}
        </div>
        <Rights>
          {rightsName("rights", "Yosef Singer")} &copy;{" "}
          {new Date().getFullYear()}
        </Rights>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
