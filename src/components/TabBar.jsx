import { useState } from "react";
import styled from "styled-components";
import { categories, tabs } from "../assets/tabs";
import Card from "./Card";

const Container = styled.div`
  width: 100%;
  border-color: blue;
`;

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow: hidden;
  height: 500px;
`;

const TabHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`;

const TabTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 3px;
  cursor: pointer;
  color: ${({ theme, selectedTab }) =>
    selectedTab ? theme.color.text.primary : theme.color.text.tertiary};
  border-bottom: 2px solid
    ${({ theme, selectedTab }) =>
      selectedTab ? theme.color.main : theme.color.text.tertiary};
`;

const TabContent = styled.div`
  display: flex;

  flex-wrap: wrap;
  overflow: hidden scroll;
  padding: 5px;
  scroll-snap-type: y mandatory;
  width: 100%;
  padding: 10px 50px;
`;

const TabBar = () => {
  const [selectedTab, setSelectedTab] = useState("");

  return (
    <Container>
      <TabContainer>
        <TabHeader>
          {categories.map((category, index) => (
            <TabTitle
              selectedTab={
                selectedTab ? category === selectedTab : category === "Todos"
              }
              key={index}
              onClick={() => {
                category === "Todos"
                  ? setSelectedTab("")
                  : setSelectedTab(category);
              }}
            >
              {category}
            </TabTitle>
          ))}
        </TabHeader>
        <TabContent>
          {tabs.map((tab, index) => (
            <Card
              content={tab.content}
              filtered={!selectedTab ? true : tab.category === selectedTab}
              key={index}
              index={index}
            />
          ))}
        </TabContent>
      </TabContainer>
    </Container>
  );
};

export default TabBar;
