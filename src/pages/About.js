import React from "react";
import ServiceBox from "../components/ServiceBox";
import styled from "styled-components";
import { useEffect } from "react";
import Footer from "../components/Footer";

const Container = styled.div`
  background: rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justiify-content: space-between;
  margin: 10px 10px 20px 10px;
  padding: 20px;
  flex-wrap: wrap;
`;

export const Header = styled.div`
  margin-top: 60px;
  height: 140px;
  background-color: #126180;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h2`
  color: #0cafff;
  font-weight: bold;
`;
export const Sub = styled.p`
  color: white;
  font-size: 14px;
  font-weight: bold;
  font-family: "Urbanist", sans-serif;
`;

const constMessage =
  "Are you an individual living abroad with dreams of owning a home back in Nigeria? We understand that distance can often create trust issues when it comes to managing construction projects remotely. That's why we're here to bridge the gap, building not just homes but also strong bonds of trust with our overseas clients.";
const About = () => {
  useEffect(() => {
    // This effect will run after the component renders
    const parentElements = document.querySelectorAll(".animate-text");
    parentElements.forEach((parent) => {
      if (parent instanceof HTMLElement) {
        const width = parent.children[0].clientWidth + "px";
        parent.style.width = width;
      }
    });
  }, []);

  return (
    <div className="activation-load" style={{ marginTop: 80 }}>
      <Header>
        <Title>WeCare Story</Title>
        <Sub>CHECKOUT OUR PROGRAMS</Sub>
      </Header>
      <Container>
        <div>
          <ServiceBox
            title="Student and Youth Program"
            message={constMessage}
            src="/settlement.jpg"
            alt="paint"
          />
        </div>
        <div>
          <ServiceBox
            title="Woman's Program"
            message="introducing our top-notch plumbing service! Got a leak, clog, or plumbing woe? 
          We are here to save the day! Our skilled team of experts is at your service, from installing 
          new plumbing fittings to fixing complex pipe repairs"
            src="/freestock.jpg"
            alt="plumbing"
            invert={true}
          />
        </div>
        <div>
          <ServiceBox
            title="Men's Program"
            message="Let's make your Home and office have the right ambience, with that class of luxury that fits your budget"
            src="/freestock.jpg"
            alt="interior"
          />
        </div>
        <div>
          <ServiceBox
            title="Care Mother Program"
            message="we are here for you"
            src="/freestock.jpg"
            alt="tiling"
            invert={true}
          />
        </div>
        <div>
          <ServiceBox
            title="Kids Club"
            message="we are here for you"
            src="/freestock.jpg"
            alt="upholstery"
          />
        </div>
        <div>
          <ServiceBox
            title="Immigration and Settlement"
            message="we are here for you"
            src="/freestock.jpg"
            alt="painting"
            invert={true}
          />
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default About;
