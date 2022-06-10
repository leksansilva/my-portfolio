import React, { useState } from "react";
import styled from "styled-components";

import { MdKeyboardArrowUp } from "react-icons/md";
import { CgEditBlackPoint } from "react-icons/cg";
import { valuesMenu } from "./Navbar";

const Container = styled.div`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  flex-direction: column;
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 2;
  align-items: flex-end;
`;

const Button = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.color.text.secondary};
  background-color: ${({ theme }) => theme.color.main};
  color: white;
  cursor: pointer;
  font-size: 25px;
`;

const MiniMenu = styled.span`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: flex-end;
  width: 100%;
  height: 0;
  box-sizing: border-box;
  background-color: white;
  box-shadow: 1px 1px 3px gray;
  border-radius: 5px;
  padding-right: 10px;
  transition: height 0.5s ease-in-out, padding 1s;
  ${({ hovering }) =>
    hovering &&
    `
    padding:10px;
   height:8rem;  
`};
  gap: 0.5em;
  margin-bottom: 10px;
`;

const MenuItem = styled.span`
  color: ${({ active }) => (active ? "#0059b3" : "grey")};
  font-style: 20px;
  font-weight: bold;
  :hover {
    color: #0059b3;
  }
  cursor: pointer;
`;

const TopButton = ({ visible, onClick, navigateTo, activeMenuItem }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <Container
      visible={visible}
      onMouseOver={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <MiniMenu hovering={hovering}>
        {valuesMenu.map(
          (item) =>
            item.title !== "Início" && (
              <MenuItem
                key={item.id}
                active={item.id === activeMenuItem}
                onClick={() => navigateTo(item.id)}
              >
                {item.title} <CgEditBlackPoint />
              </MenuItem>
            )
        )}
      </MiniMenu>
      <Button onClick={onClick}>
        <MdKeyboardArrowUp />
      </Button>
    </Container>
  );
};

export default TopButton;
