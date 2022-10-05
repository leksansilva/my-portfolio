import React from "react";
import styled from "styled-components";

import Coding from "../assets/img/Coding.png";
import Carroussel from "./Carroussel";

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const Left = styled.div`
  width: 40%;

  position: relative;
`;

const Image = styled.img`
  width: 80%;
  position: absolute;
  bottom: -50px;
`;

const Right = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

          <Carroussel />
        </Wrapper>
      </Right>
    </Container>
  );
};

export default Portfolio;
