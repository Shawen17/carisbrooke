import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Container = styled(motion.div)`
  width: 100%;
  max-width: 1100px;
  margin: 30px auto;
  padding: 15px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin: 20px auto;
    padding: 10px;
  }
`;

export const Title = styled.h4`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  font-family: "Urbanist", sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: #18a558;

  padding: 15px 10px;
  margin: 0;

  @media (max-width: 482px) {
    font-size: 19px;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  min-width: 0;
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Top = styled.img`
  flex: 1 1 50%;
  width: 50%;
  min-width: 0;
  min-height: 280px;
  object-fit: cover;
  display: block;

  @media (max-width: 600px) {
    width: 100%;
    min-height: 220px;
    max-height: 300px;
  }
`;

const Bottom = styled.div`
  flex: 1 1 50%;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 30px;
  box-sizing: border-box;
  background-color: #f8f8f8;

  .bar {
    width: 100%;
    max-width: 450px;
  }

  .bar_content {
    display: block;
    font-family: "Urbanist", sans-serif;
    font-size: 17px;
    line-height: 1.8;
    font-weight: 600;
    color: #333333;
    overflow-wrap: anywhere;
  }

  @media (max-width: 600px) {
    padding: 25px 20px;
  }

  @media (max-width: 482px) {
    padding: 20px 15px;

    .bar_content {
      font-size: 15px;
      line-height: 1.7;
    }
  }
`;

const ServiceBox = ({ message, src, alt = "", invert = false, title }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const image = <Top src={src} alt={alt} loading="lazy" />;

  const description = (
    <Bottom>
      <div className="bar">
        <span className="bar_content">{message}</span>
      </div>
    </Bottom>
  );

  return (
    <Container
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {title && <Title>{title}</Title>}

      <Content>
        {invert ? (
          <>
            {description}
            {image}
          </>
        ) : (
          <>
            {image}
            {description}
          </>
        )}
      </Content>
    </Container>
  );
};

export default ServiceBox;
