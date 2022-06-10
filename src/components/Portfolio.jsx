import React from "react";
import styled from "styled-components";

import Coding from "../assets/img/Coding.png";

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const Left = styled.div`
  width: 50%;
`;

const Image = styled.img`
  width: 70%;
  margin-top: 35%;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Portfolio = () => {
  return (
    <Container>
      <Left>
        <Image src={Coding} />
      </Left>
      <Right></Right>
    </Container>
  );
};

export default Portfolio;
