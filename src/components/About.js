import React, { useState } from "react";
import styled from "styled-components";
import Ideia from "../assets/img/Ideia.png";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 50%;
`;

const Image = styled.img`
  width: 80%;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.span`
  font-weight: 800;
  font-size: 80px;
  color: #0059b3;
  span {
    color: black;
  }
`;
const SubTitle = styled.p`
  margin-top: 40px;
  font-size: 40px;
  width: 80%;
  #typedText {
    color: #0059b3;
  }
`;

const CardDescription = styled.div`
  height: 100%;
  margin: 20px;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 10px gray;
`;
const Description = styled.p`
  text-align:justify;
  font-weight: 500;
`;

const textArray = [
  "<strong>soluções</strong>",
  "<strong>inovações</strong>",
  "<strong>valores</strong>",
];
const About = () => {
  const [invoke, setInvoke] = useState(true);

  const text = () => {
    textArray.forEach((text, index) => {
      setTimeout(() => {
        document.getElementById("typedText").innerHTML = text;
      }, 1000 * index);
    });
    setTimeout(text, 7000);
  };

  if (invoke) {
    console.log("oi");
    setInvoke(false);
    text();
  }

  return (
    <Container>
      <Left>
        <Image src={Ideia} />
      </Left>
      <Right>
        <Title>
          Ever<span>Never</span>
        </Title>
        <SubTitle>
          Desenvolvendo <span id="typedText"></span>
        </SubTitle>
        <CardDescription>
          <Description>
            "EverNever" vem de uma expressão em inglês que na forma correta é
            escrito "Ever Never", que é utilizado quando queremos enfatizar o
            sentido de nunca. Eu utilizo como lema de vida enfatizando a ideia
            de sempre evoluir e nunca regridir. Por isso está escrito dessa forma,
            destacando o "Ever" que traduzindo de forma literal significa sempre
          </Description>
        </CardDescription>
      </Right>
    </Container>
  );
};

export default About;
