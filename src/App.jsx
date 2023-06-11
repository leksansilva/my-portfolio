import { useState } from "react";
import styled, { css, ThemeProvider } from "styled-components";

import theme from "./styles/theme";

import About from "./components/About";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";
import TopButton from "./components/TopButton";
import WhoIAm from "./components/WhoIAm";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  scroll-snap-align: start;
  position: relative;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const IntroShape = styled.div`
  ${Shape}
  clip-path: polygon(70% 0, 100% 0, 100% 100%, 48% 100%);
  z-index: 0;
  transition: clip-path 2s ease-in-out;
  ${({ showMore }) =>
    showMore &&
    css`
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    `}
  background-color: ${({ theme }) => theme.color.shadow.secondary};
`;

const AboutShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 48% 0, 30% 100%, 0 100%);
  background-color: ${({ theme }) => theme.color.main};
  z-index: 0;
  transition: clip-path 2s ease-in-out;
  ${({ showMore }) =>
    showMore &&
    css`
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    `}
`;

const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 30% 0, 30% 100%, 0 100%);
  background-color: ${({ theme }) => theme.color.monochrome.primary};
  z-index: 0;
  transition: clip-path 2s ease-in-out;
  ${({ showMore }) =>
    showMore &&
    css`
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    `}
`;

const PortfolioShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 30% 0, 10% 100%, 0 100%);
  background-color: ${({ theme }) => theme.color.monochrome.quaternary};
  z-index: 0;
  transition: clip-path 2s ease-in-out;
  ${({ showMore }) =>
    showMore &&
    css`
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    `}
`;

const ContactShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 10% 0, 50% 100%, 0 100%);
  background-color: ${({ theme }) => theme.color.monochrome.primary};
  z-index: 0;
  transition: clip-path 2s ease-in-out;
  ${({ showMore }) =>
    showMore &&
    css`
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    `}
`;

const InnerHeight = window.innerHeight;

const App = () => {
  const [windowScroll, setWindowScroll] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("");
  const [showMore, SetShowMore] = useState(false);

  const toggleVisible = (ev) => {
    setWindowScroll(window.scrollY);
    console.log(window.scrollY);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const navigateTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView();
    setActiveMenuItem(id);
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <ThemeProvider theme={theme}>
      <Container id="intro">
        <Navbar
          navigateTo={navigateTo}
          showMore={showMore}
          setShowMore={SetShowMore}
        />
        <Intro navigateTo={navigateTo} showMore={showMore} />
        <IntroShape showMore={showMore}>
          <WhoIAm />
        </IntroShape>
      </Container>
      <Container id="about">
        <About />
        <AboutShape showMore={showMore && windowScroll >= InnerHeight} />
      </Container>
      <Container id="services">
        <Service />
        <ServiceShape showMore={showMore && windowScroll >= InnerHeight * 2} />
      </Container>
      <Container id="portfolio">
        <Portfolio />
        <PortfolioShape
          showMore={showMore && windowScroll >= InnerHeight * 3}
        />
      </Container>
      <Container id="contact">
        <Contact showMore={showMore} />
        <ContactShape showMore={showMore && windowScroll >= InnerHeight * 4} />
      </Container>
      <TopButton
        visible={windowScroll > 600}
        onClick={scrollToTop}
        navigateTo={navigateTo}
        activeMenuItem={activeMenuItem}
      />
    </ThemeProvider>
  );
};

export default App;
