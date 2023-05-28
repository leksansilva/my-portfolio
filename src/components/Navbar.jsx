import React, { useState } from "react";
import styled, { css } from "styled-components";

const Container = styled.header`
  height: 50px;
  z-index: 1;
  position: relative;
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
    transition: color 2s ease-out;
    color: black;
    ${({ toggleColor }) =>
      toggleColor &&
      css`
        color: white;
      `};
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

  cursor: pointer;

  transition: color 0.3s ease-out, transform 0.3s ease-in-out;
  ${({ toggleColor }) =>
    toggleColor &&
    css`
      transition: color 2s ease-in;
      color: white;
    `};
  :hover {
    color: #0059b3;

    transform: scale(1.05);
  }
`;

const Button = styled.button`
  border: solid 1px white;
  padding: 10px 15px;
  background-color: #4da6ff;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  color: white;
  transition: background-color 0.5s ease-in-out;
  :hover {
    color: #4da6ff;
    background-color: white;
  }

  :active {
    color: #4da6ff;
    background-color: white;
  }
`;

export const valuesMenu = [
  { id: "intro", title: "Início" },
  { id: "about", title: "Sobre" },
  { id: "services", title: "Serviços" },
  { id: "portfolio", title: "Portfólio" },
  { id: "contact", title: "Contato" },
];

const Navbar = ({ navigateTo, setShowMore, showMore }) => {
  const [blockedMouseEvent, setBlockedMouseEvent] = useState(false);

  const oncClickOpenShape = () => {
    if (!blockedMouseEvent) {
      setShowMore(true);
      setBlockedMouseEvent(true);
      return;
    }
    setShowMore(false);
    setTimeout(() => {
      setBlockedMouseEvent(false);
    }, 2000);
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo toggleColor={showMore}>
            Ever<span>Never</span>
          </Logo>
          <Menu>
            {valuesMenu.map((item) => (
              <MenuItem
                key={item.id}
                toggleColor={showMore}
                onClick={() => navigateTo(item.id)}
              >
                {item.title}
              </MenuItem>
            ))}
          </Menu>
        </Left>

        <Button
          onMouseEnter={() => !blockedMouseEvent && setShowMore(true)}
          onMouseLeave={() => !blockedMouseEvent && setShowMore(false)}
          onClick={oncClickOpenShape}
        >
          MAIS SOBRE MIM
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
