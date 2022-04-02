import React from "react";
import styled from "styled-components";

const Container = styled.header`
  height: 50px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-weight: 800;
  color: #0059B3;
  span {
    color: black;
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
`;

const MenuItem = styled.li`
  font-style: 20px;
  font-weight: bold;
  color: grey;
  position: relative;
  top: 0;
  cursor: pointer;
  :hover{
    color: #0059B3;
   
    top: -2px;
  }
`;

const Button = styled.button`
  border: solid 1px white;
  padding: 10px 15px;
  background-color: #4DA6FF;
  font-weight:bold;
  border-radius: 10px;
  cursor: pointer;
  color: white;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            Ever<span>Never</span>
          </Logo>
          <Menu>
            <MenuItem >Início</MenuItem>
            <MenuItem>Sobre</MenuItem>
            <MenuItem>Serviços</MenuItem>
            <MenuItem>Projetos</MenuItem>
            <MenuItem>Portfólio</MenuItem>
            <MenuItem>Contato</MenuItem>
          </Menu>
        </Left>

        <Button>MAIS SOBRE MIM</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
