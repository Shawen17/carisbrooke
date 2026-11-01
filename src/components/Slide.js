import React from "react";
import styled from "styled-components";

import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import Footer from "./Footer";

// Main section
const TopContainer = styled.section`
  width: 100%;
  background-color: #ff8624;
  padding: 35px 0 0;
  box-sizing: border-box;
`;

// Section heading
const Heading = styled.h4`
  text-align: center;
  color: white;
  font-family: "Urbanist", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 0 15px 25px;
`;

// Responsive grid wrapper
const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 30px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 25px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 20px;
    gap: 20px;
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    padding: 15px 20px;
    gap: 15px;
  }
`;

// Individual information box
const Box = styled.div`
  width: 100%;
  min-width: 0;
  min-height: 200px;
  height: auto;
  padding: 20px 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  overflow-wrap: anywhere;

  @media (max-width: 520px) {
    min-height: 170px;
    padding: 20px 15px;
  }
`;

// Icon
const Icon = styled.div`
  color: #ff8624;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  svg {
    font-size: 45px;
  }
`;

// Box title
const Title = styled.h3`
  text-transform: uppercase;
  font-family: "Urbanist", sans-serif;
  font-weight: bold;
  font-size: 18px;
  margin: 5px 0 10px;
  color: #333;
`;

// Box description
const Subtitle = styled.p`
  font-family: "Urbanist", sans-serif;
  font-size: 14px;
  color: grey;
  line-height: 1.6;
  margin: 3px 0;
  width: 100%;
  overflow-wrap: anywhere;
  word-break: normal;
`;

// Email links
const EmailLink = styled.a`
  color: grey;
  text-decoration: none;
  overflow-wrap: anywhere;
  text-align: center;

  &:hover {
    color: #ff8624;
    text-decoration: underline;
  }
`;

const Slide = () => {
  return (
    <>
      <TopContainer>
        <Heading>The Community is Our Priority</Heading>

        <Wrapper>
          {/* Office Address */}
          <Box>
            <Icon>
              <LocationOnIcon />
            </Icon>

            <Title>Our Main Office</Title>

            <Subtitle>
              Office Hours: 10am – 4pm Monday, Wednesday, and Saturday
            </Subtitle>

            <Subtitle>283 Duke Street, Kitchener, ON N2H 3X7</Subtitle>
          </Box>

          {/* Contact Number */}
          <Box>
            <Icon>
              <PhoneIcon />
            </Icon>

            <Title>Contact Number</Title>

            <Subtitle>
              <a href="tel:+12266471080">(226) 647 1080</a>
            </Subtitle>
          </Box>

          {/* Email */}
          <Box>
            <Icon>
              <MailIcon />
            </Icon>

            <Title>Email</Title>

            <Subtitle>
              <EmailLink href="mailto:info@wecarecentre.ca">
                info@wecarecentre.ca
              </EmailLink>
            </Subtitle>

            <Subtitle>
              Donation:
              <br />
              <EmailLink href="mailto:donation@wecarecentre.ca">
                donation@wecarecentre.ca
              </EmailLink>
            </Subtitle>
          </Box>
        </Wrapper>
      </TopContainer>

      <Footer />
    </>
  );
};

export default Slide;
