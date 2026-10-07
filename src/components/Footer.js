import React from "react";
import styled from "styled-components";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Foot = styled.div`
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 50%;

  @media screen and (max-width: 1145px) {
    color: white;
  }
`;

const SocialIcon = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;

const Desc = styled.p`
  font-size: 18px;
  font-weight: 500px;
  color: #ff8624;

  @media screen and (max-width: 482px) {
    font-size: 12px;

    ${SocialIcon} {
      color: black;
    }
  }
`;

const Footer = () => {
  return (
    <Foot>
      <h1>Get in touch</h1>
      <Desc>
        <em>
          YOU CAN COUNT ON US TO SUPPORT IMMIGRANTS AND REFUGEES WITHIN OUR
          COMMUNITIES{" "}
        </em>
      </Desc>
      <SocialIcon>
        <FacebookOutlinedIcon style={{ fontSize: 30 }} />
        <TwitterIcon style={{ fontSize: 30 }} />
        <InstagramIcon style={{ fontSize: 30 }} />
      </SocialIcon>
    </Foot>
  );
};

export default Footer;
