import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Header, Sub } from "./About";
import { Title } from "../components/ServiceBox";
import Footer from "../components/Footer";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";

const ServiceContainer = styled.section`
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  padding: 60px 30px 80px;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 35px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 35px 20px 60px;
    gap: 25px;
  }
`;

const SubContainer = styled(motion.article)`
  position: relative;
  padding: 40px 35px;
  border-radius: 18px;
  background: #ffffff;
  border: 1px solid rgba(24, 165, 88, 0.12);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
  overflow: hidden;

  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease,
    border-color 0.35s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(180deg, #18a558, #8bd9a9);
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.35s ease;
  }

  &:hover {
    transform: translateY(-9px);
    border-color: rgba(24, 165, 88, 0.3);
    box-shadow: 0 18px 40px rgba(24, 165, 88, 0.13);
  }

  &:hover::before {
    transform: scaleY(1);
  }

  @media (max-width: 768px) {
    padding: 30px 25px;
  }

  @media (max-width: 482px) {
    padding: 25px 20px;
  }
`;

const IconWrapper = styled.div`
  width: 65px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: rgba(24, 165, 88, 0.1);
  color: #18a558;
  margin-bottom: 25px;

  transition: all 0.35s ease;

  ${SubContainer}:hover & {
    background: #18a558;
    color: white;
    transform: rotate(-6deg) scale(1.08);
  }

  svg {
    font-size: 34px;
  }
`;

const CardTitle = styled.h2`
  font-family: "Urbanist", sans-serif;
  font-size: 25px;
  font-weight: 800;
  color: #18a558;
  margin: 0 0 18px;
  letter-spacing: 1px;

  @media (max-width: 482px) {
    font-size: 21px;
  }
`;

const Desc = styled.p`
  font-family: "Urbanist", sans-serif;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.9;
  color: #333333;
  margin: 0;

  @media (max-width: 482px) {
    font-size: 15px;
    line-height: 1.8;
  }
`;

const SectionHeading = styled.div`
  text-align: center;
  padding: 30px 20px 10px;

  h2 {
    font-family: "Urbanist", sans-serif;
    font-size: clamp(27px, 4vw, 38px);
    font-weight: 800;
    color: #18a558;
    margin: 0 0 10px;
  }

  p {
    font-family: "Urbanist", sans-serif;
    color: #888;
    font-size: 17px;
    text-transform: capitalize;
    margin: 0;
  }
`;

const cards = [
  {
    title: "OUR GOAL",
    icon: <FavoriteBorderIcon />,
    description:
      "Our goal is to work with underserved communities so that they can feel a greater sense of belonging in our society. We want to disrupt inter-generational cycles of poverty. We do this by helping to connect people to resources like food, shelter, community, and counselling. When those who are struggling feel comfortable, empowered, and have a sense of belonging, we all gain from a stronger community!",
  },
  {
    title: "WHO WE ARE",
    icon: <GroupsOutlinedIcon />,
    description:
      "WeCare Centre is an arm of Healing Stream Centre, a non-profit organization devoted to enhancing the lives of those from underserved communities. We are particularly passionate about supporting women in marginalized communities. We believe in openly confronting life's obstacles with compassion to create opportunities to better support the development of the most vulnerable within our society.",
  },
];

const Service = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 45,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <Header>
        <Title>WeCare Services</Title>
        <Sub>Our range of services</Sub>
      </Header>

      <SectionHeading>
        <h2>Making a Difference Together</h2>
        <p>Compassion, community and meaningful support</p>
      </SectionHeading>

      <ServiceContainer
        ref={ref}
        as={motion.section}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {cards.map((card) => (
          <SubContainer
            key={card.title}
            variants={cardVariants}
            whileHover={{ y: -5 }}
          >
            <IconWrapper>{card.icon}</IconWrapper>

            <CardTitle>{card.title}</CardTitle>

            <Desc>{card.description}</Desc>
          </SubContainer>
        ))}
      </ServiceContainer>

      <Footer />
    </>
  );
};

export default Service;
