import styled from "styled-components";

const Container = styled.a`
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 5px gray;
  height: 180px;
  width: 220px;
  border-radius: 5px;
  text-decoration: none;
  box-sizing: border-box;
  overflow: hidden;
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

const Card = ({ content }) => {
  return (
    <Container href={content.link} target="_blank">
      <Image src={content.image} alt={content.title} />
      <Title>{content.title}</Title>
    </Container>
  );
};

export default Card;
