import styled, { css } from "styled-components";

const fadeInAnimantion = css`
  opacity: 1;
`;

const fadeOutAnimantion = css`
  height: 0;
  width: 0;
  opacity: 0;
  animation: teste 0.2s linear;
  margin: 0;
`;

const Container = styled.a`
  margin: 5px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 5px gray;
  height: 180px;
  width: 220px;
  border-radius: 5px;
  text-decoration: none;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  transition: all ${({ position }) => position * 0.1 + "s"} linear;
  ${({ filtered }) => (filtered ? fadeInAnimantion : fadeOutAnimantion)}
`;

const Image = styled.img`
  width: 100%;
  height: 110px;
  pointer-events: none;
`;

const Title = styled.h4`
  color: ${({ theme }) => theme.color.main} !important;
  text-align: center;
  margin: auto 10px;
`;

const Card = ({ content, index, filtered }) => {
  return (
    <Container
      filtered={filtered}
      position={index + 1}
      href={content.link}
      target="_blank"
    >
      <Image src={content.image} alt={content.title} />
      <Title>{content.title}</Title>
    </Container>
  );
};

export default Card;
