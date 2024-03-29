import React from "react";
import styled, { css } from "styled-components";
import Alex from "../assets/img/Alex2.jpg";

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
  ${Emerge}
`;

const Title = styled.h1`
  font-size: 60px;
  width: 60%;
`;

const Description = styled.p`
  width: 60%;
  font-size: 1.12rem;
  text-align: justify;
  font-weight: 400;
  color: ${({ theme }) => theme.color.text.tertiary};
  a {
    color: ${({ theme }) => theme.color.text.tertiary};
  }
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
  outline: none;
`;

const Right = styled.div`
  width: 40%;
  padding: 40px;
  display: flex;
  align-items: flex-end;
  justify-content: end;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  opacity: 0.65;
  z-index: 1;
  pointer-events: none;
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 0% 100%);
  transition: clip-path 2s ease-in-out, opacity 2s ease-in-out;
  ${({ transition }) =>
    transition &&
    css`
      opacity: 1;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    `};
`;

const Intro = ({ navigateTo, showMore }) => {
  return (
    <Container>
      <Left>
        <Title>Bem vindo!</Title>
        <Description>
          Olá! Eu sou Alex Silva, a pessoa quem desenvolveu esse site utilizando{" "}
          <a target="_blank" href="https://pt-br.reactjs.org/" rel="noreferrer">
            React
          </a>
          , uma biblioteca do JavaScript , com o pacote{" "}
          <a
            target="_blank"
            href="https://styled-components.com/"
            rel="noreferrer"
          >
            Styled Components
          </a>{" "}
          que permite a escrita de CSS em JavaScript usando Tagged Templates
          Literals
        </Description>
        <Info>
          <Button onClick={() => navigateTo("portfolio")}>
            OUTROS PROJETOS
          </Button>
        </Info>
      </Left>
      <Right>
        <Image src={Alex} transition={showMore} />
      </Right>
    </Container>
  );
};

export default Intro;
