import React from "react";
import styled, { css } from "styled-components";
import Alex from "../assets/img/AlexPNG.png";

const Emerge = css`
  animation: emerge 2.5s linear;
  @keyframes emerge {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  ${ Emerge}
`;

const Title = styled.h1`
  font-size: 60px;
  width: 60%;
`;

const Description = styled.p`
  width: 60%;
  font-size: 20px;
  text-align: justify;
`;

const Info = styled.div`
  width: 60%;
  display: flex;
`;

const Button = styled.button`
  letter-spacing: 1.5px;
  padding: 15px 25px;
  background-color: #0059b3;
  font-weight: bold;
  border-radius: 10px;
  color: white;
  border: none;
  cursor: pointer;
`;

const Right = styled.div`
  width: 40%;
`;

const Image = styled.img`
  width: 100%;
  margin-top:63px;
`;

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Bem Vindo!</Title>
        <Description>
          Olá! Eu sou Alex Silva, a pessoa quem desenvolveu esse site utilizando
          React, uma biblioteca do JavaScript, que com o pacote Styled Components
          permitiu a escrita de CSS em JavaScript usando Tagged Templates
          Literals
        </Description>
        <Info>
          <Button>OUTROS PROJETOS</Button>
        </Info>
      </Left>
      <Right>
        <Image src={Alex} />
      </Right>
    </Container>
  );
};

export default Intro;
