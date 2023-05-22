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
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden scroll;
  padding: 5px;
  scroll-snap-type: y mandatory;
`;

const TabBar = () => {
  const [selectedTab, setSelectedTab] = useState("");

  const tabsFiltered = tabs.filter((tab) =>
    selectedTab ? tab.category === selectedTab : tab
  );

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
          {tabsFiltered.map((tab, index) => (
            <Card content={tab.content} key={index} />
          ))}
        </TabContent>
      </TabContainer>
    </Container>
  );
};

export default TabBar;
