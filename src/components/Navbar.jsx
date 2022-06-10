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
  color: #0059b3;
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
  :hover {
    color: #0059b3;

    top: -2px;
  }
`;

const Button = styled.button`
  border: solid 1px white;
  padding: 10px 15px;
  background-color: #4da6ff;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  color: white;
`;

export const valuesMenu = [
  { id: "intro", title: "Início" },
  { id: "about", title: "Sobre" },
  { id: "services", title: "Serviços" },
  { id: "portfolio", title: "Portfólio" },
  { id: "contact", title: "Contato" },
];

const Navbar = ({ navigateTo }) => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            Ever<span>Never</span>
          </Logo>
          <Menu>
            {valuesMenu.map((item) => (
              <MenuItem key={item.id} onClick={() => navigateTo(item.id)}>
                {item.title}
              </MenuItem>
            ))}
          </Menu>
        </Left>

        <Button>MAIS SOBRE MIM</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
