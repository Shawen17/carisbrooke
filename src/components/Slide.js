import React from "react";
import styled from "styled-components";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Footer from "./Footer";

const TopContainer = styled.div`
  height: 100px;
  background-color: #ff8624;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px 30px 0px 30px;
  flex-wrap: wrap;
`;

const Box = styled.div`
  height: 200px;
  flex: 15%;
  margin-right: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justity-content: center;
  align-items: center;
  margin-bottom: 10px;
  border: none;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 482px) {
    flex: 100%;
    margin: 0px 20px 10px 20px;
    height: 150px;
  }
`;
const Icon = styled.div`
  color: #ff8624;

  padding-top: 25px;
`;

const Title = styled.div`
  text-transform: uppercase;
  font-family: "Urbanist", sans-serif;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
`;

const Subtitle = styled.p`
  font-size: 12px;
  color: grey;
`;

const Slide = () => {
  return (
    <div>
      <TopContainer>
        <h4 style={{ textAlign: "center" }}>The Community is Our Priority</h4>
        <div>
          <Wrapper>
            <Box>
              <Icon>
                {" "}
                <LocationOnIcon style={{ fontSize: 50 }} />
              </Icon>
              <Title>our main office</Title>

              <Subtitle>
                <p>Office Hours: 10am – 4pm Monday, Wednesday, and Saturday </p>
                283 Duke Street, Kitchener, ON N2H 3X7
              </Subtitle>
            </Box>
            <Box>
              <Icon>
                {" "}
                <PhoneIcon style={{ fontSize: 50 }} />{" "}
              </Icon>
              <Title>contact number</Title>
              <Subtitle>(226) 647 1080</Subtitle>
            </Box>
            <Box>
              <Icon>
                <MailIcon style={{ fontSize: 50 }} />
              </Icon>
              <Title>email</Title>
              <Subtitle>info@wecarecentre.ca</Subtitle>
              Donation: <Subtitle> donation@wecarecentre.ca</Subtitle>
            </Box>
          </Wrapper>
          <Footer />
        </div>
      </TopContainer>
      <div className="topcontainer"></div>
    </div>
  );
};

export default Slide;
