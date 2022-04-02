import React from "react";
import styled from "styled-components";
import Dev from "../assets/img/Dev.png";
import MiniCard from "./MiniCard";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 50%;
`;
const Right = styled.div`
  width: 50%;
`;
const Image = styled.img`
  height: 40%;
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
  justify-content: space-around;
`;

const Figma =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg";

const ReactJs =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";

const NextJs =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg";
const Service = () => {
  return (
    <Container>
      <Left>
        <Image src={Dev} />
      </Left>
      <Right>
        <Wrapper>
          <Title>Alta perfomance e ótimo design</Title>
          <Description>
            O desenvolvimento do WebSite, App ou WebApp é feito buscando
            representar da melhor forma o negócio e a marca do cliente, com
            design intuitivo para que os usuários sintam-se a vontade para
            explorar, entender e navegar garantindo a melhor experiência.
          </Description>
          <CardContainer>
            <MiniCard img={Figma}>
              {" "}
              Prototipação e direção de design de Sites e App com Figma
            </MiniCard>
            <MiniCard img={ReactJs}>
              Interface de WebSites, WebApps e Apps com React
            </MiniCard>
            <MiniCard img={NextJs}>
              Interface e api de WebSites, WebApps e Apps com NextJs
            </MiniCard>
          </CardContainer>
        </Wrapper>
      </Right>
    </Container>
  );
};

export default Service;
