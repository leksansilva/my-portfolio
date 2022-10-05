import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Ideia from "../assets/img/Ideia.png";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 60%;
  margin-top: 50px;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 70px;
  color: ${({ theme }) => theme.color.main};
  span {
    color: black;
  }
`;
const SubTitle = styled.p`
  margin-top: 40px;
  font-size: 40px;
  width: 80%;
  .Typewriter {
    color: ${({ theme }) => theme.color.main};
  }
`;

const CardDescription = styled.div`
  height: 100%;
  margin: 20px;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 2px 2px 5px gray;
  margin-bottom: 60px;
`;
const Description = styled.p`
  text-align: justify;
  font-weight: 400;
  font-size: 18px;
  margin-top: 70px;
  color: ${({ theme }) => theme.color.text.tertiary};
`;

const textArray = [
  "<strong>soluções</strong>",
  "<strong>inovações</strong>",
  "<strong>valores</strong>",
];
const About = () => {
  return (
    <Container>
      <Left>
        <Image alt="Work illustrations by Storyset" src={Ideia} />
      </Left>
      <Right>
        <Title>
          Ever<span>Never</span>
        </Title>
        <SubTitle>
          Desenvolvendo&nbsp;
          <Typewriter
            component={"span"}
            options={{ loop: true, strings: textArray, autoStart: true }}
          />
        </SubTitle>
        <CardDescription>
          <Description>
            "EverNever" vem de uma expressão em inglês que na forma correta é
            escrito "Never Ever", que é utilizado quando queremos enfatizar o
            sentido de nunca. Eu utilizo como lema de vida enfatizando a ideia
            de sempre evoluir e nunca regredir. Por isso está escrito dessa
            forma, destacando o "Ever" que traduzindo de forma literal significa
            sempre
          </Description>
        </CardDescription>
      </Right>
    </Container>
  );
};

export default About;
