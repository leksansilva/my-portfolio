import styled from "styled-components";

const Container = styled.a`
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 5px gray;
  height: 180px;
  width: 230px;
  border-radius: 5px;
  text-decoration: none;
  padding-bottom: 20px;
  box-sizing: border-box;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px 5px 0 0;

  margin-bottom: auto;
`;

const Title = styled.h4`
  color: ${({ theme }) => theme.color.main} !important;
  text-align: center;
`;

const Card = ({ content }) => {
  return (
    <Container href={content.link} target="_blank">
      <Image src={content.image} alt={content.title} />
      <Title>{content.title}</Title>
      <p>{content.description}</p>
    </Container>
  );
};

export default Card;
