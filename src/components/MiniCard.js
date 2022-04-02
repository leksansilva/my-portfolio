import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 130px;
  height: 200px;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 2px 2px 5px gray;
  border-radius: 10px;
  justify-content: space-between;
  gap: 10px;
  position: relative;
  top: 0;
  transition: top 0.2s;
  :hover {
    top: -10px;
   
  }
`;

const Image = styled.img`
  width: 40%;
`;

const Text = styled.span`
  text-align: center;

`;

const LearnMore = styled.a`
  text-align: right;
  color: black;
  
`;

const MiniCard = ({ img, children }) => {
  return (
    <Container>
      <Image src={img} />
      <Text>{children}</Text>
      <LearnMore href="" rel="noopener">
        Saiba mais
      </LearnMore>
    </Container>
  );
};

export default MiniCard;
