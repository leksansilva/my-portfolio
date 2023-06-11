import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Idea from "../assets/img/Idea.png";

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
`;

const Image = styled.img`
  width: 60%;
  margin: 10% 0;
  z-index: 1;
  position: relative;
  pointer-events: none;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
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
  margin-bottom: 40px;
  width: 80%;
  .Typewriter {
    color: ${({ theme }) => theme.color.main};
  }
`;

const Card = styled.div`
  height: max-content;
  margin: 20px;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 2px 2px 5px gray;
`;

const Description = styled.p`
  text-align: justify;
  font-weight: 400;
  font-size: 18px;
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
        <Image alt="Work illustrations by Storyset" src={Idea} />
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
        <Card>
          <Description>
            "EverNever" vem de uma expressão em inglês que na forma correta é
            escrito "Never Ever", que é utilizado quando queremos enfatizar o
            sentido de nunca. Eu utilizo como lema de vida enfatizando a ideia
            de sempre evoluir e nunca regredir. Por isso está escrito dessa
            forma, destacando o "Ever" que traduzindo de forma literal significa
            sempre
          </Description>
        </Card>
      </Right>
    </Container>
  );
};

export default About;
