import React from "react";
import styled from "styled-components";
import Dev from "../assets/img/Dev.png";
import { miniCards } from "../assets/sets";
import MiniCard from "./MiniCard";

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const Left = styled.div`
  width: 40%;
`;
const Right = styled.div`
  width: 60%;
`;
const Image = styled.img`
  width: 80%;
  margin-top: 45.6%;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h1``;

const Description = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.color.text.tertiary};
  text-align: justify;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const Service = () => {
  return (
    <Container>
      <Left>
        <Image src={Dev} />
      </Left>
      <Right>
        <Wrapper>
          <Title>Alta performance e ótimo design</Title>
          <Description>
            O desenvolvimento do WebSite, App ou WebApp é feito buscando
            representar da melhor forma o negócio e a marca do cliente, com
            design intuitivo para que os usuários sintam-se a vontade para
            explorar, entender e navegar garantindo a melhor experiência.
          </Description>
          <CardContainer>
            {miniCards.map((card, index) => (
              <MiniCard key={index} img={card.img}>
                {card.text}
              </MiniCard>
            ))}
          </CardContainer>
        </Wrapper>
      </Right>
    </Container>
  );
};

export default Service;
