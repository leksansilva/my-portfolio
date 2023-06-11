import React from "react";
import styled from "styled-components";

import Coding from "../assets/img/Coding.png";
import TabBar from "./TabBar";

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const Left = styled.div`
  width: 30%;

  height: 100%;
`;

const Image = styled.img`
  width: 80%;
  margin-top: 90%;
  z-index: 1;
  position: relative;
  pointer-events: none;
`;

const Right = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const Title = styled.h1``;

const Portfolio = () => {
  return (
    <Container>
      <Left>
        <Image src={Coding} />
      </Left>
      <Right>
        <Wrapper>
          <Title>Soluções Desenvolvidas</Title>
          <TabBar />
        </Wrapper>
      </Right>
    </Container>
  );
};

export default Portfolio;
