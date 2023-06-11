import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 260px;
  height: 180px;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 2px 2px 5px gray;
  border-radius: 10px;
  justify-content: space-between;
  gap: 10px;
  background-color: #fff;
  transition: all 0.2s;
  :hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 50px;
  pointer-events: none;
`;

const Text = styled.span`
  text-align: center;
`;

const LearnMore = styled.a`
  text-align: right;
  color: black;
  cursor: pointer;
`;

const MiniCard = ({ img, children, link }) => {
  return (
    <Container>
      <Image src={img} />
      <Text>{children}</Text>
      <LearnMore href={link} target="_blank">
        Saiba mais
      </LearnMore>
    </Container>
  );
};

export default MiniCard;
