import React from "react";
import { Header, Sub } from "./About";
import { Title } from "../components/ServiceBox";
import styled from "styled-components";
import Footer from "../components/Footer";

const ServiceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SubContainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Desc = styled.div`
  padding: 10px;
  font-family: "Urbanist", sans-serif;
  font-weight: bold;
  border: 0.5px thin grey;
  border-radius: 10px;
  box-shadow: 0 4px 10px gray;
  margin: 5px;
  box-sizing: border-box;
`;

const Service = () => {
  return (
    <div>
      <Header>
        <Title>WeCare Services</Title>
        <Sub>our range of services</Sub>
      </Header>
      <ServiceContainer>
        <SubContainer>
          <Title>OUR GOAL</Title>
          <Desc>
            Our goal is to work with underserved communities so that they can
            feel a greater sense of belonging in our society. We want to disrupt
            inter-generational cycles of poverty. We do this by helping to
            connect people to resources like food, shelter, community, and
            counselling. When those who are struggling feel comfortable,
            empowered, and have a sense of belonging, we all gain from a
            stronger community!
          </Desc>
        </SubContainer>
        <SubContainer>
          <Title>WHO WE ARE?</Title>
          <Desc>
            WeCare Centre is an arm of Healing Stream Centre, a non-profit
            organization devoted to enhancing the lives of those from
            underserved communities. We are particularly passionate about
            supporting women in marginalized communities. We believe in openly
            confronting life’s obstacles with compassion to create opportunities
            to better support the development of the most vulnerable within our
            society.
          </Desc>
        </SubContainer>
      </ServiceContainer>
      <Footer />
    </div>
  );
};

export default Service;
