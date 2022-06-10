import { useState } from "react";
import styled, { css, ThemeProvider } from "styled-components";

import theme from "./styles/theme";

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Service from "./components/Service";
import TopButton from "./components/TopButton";
import Portfolio from "./components/Portfolio";

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
  background-color: ${({ theme }) => theme.color.shadow.secondary};
`;

const AboutShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 48% 0, 30% 100%, 0 100%);
  background-color: ${({ theme }) => theme.color.main};
`;
const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 30% 0, 30% 100%, 0 100%);
  background-color: ${({ theme }) => theme.color.monochrome.primary};
`;
const PortfolioShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 30% 0, 10% 100%, 0 100%);
  background-color: ${({ theme }) => theme.color.monochrome.quaternary};
`;
const ContactShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 30% 0, 30% 100%, 0 100%);
  background-color: ${({ theme }) => theme.color.monochrome.primary};
`;

const App = () => {
  const [visible, setVisible] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("");

  const toggleVisible = () => {
    if (window.scrollY > 600) {
      setVisible(true);
    } else if (window.scrollY <= 600) {
      setVisible(false);
    }
    console.log(window.on());
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
        <Navbar navigateTo={navigateTo} />
        <Intro navigateTo={navigateTo} />
        <IntroShape />
      </Container>
      <Container id="about">
        <About state={visible} />
        <AboutShape />
      </Container>
      <Container id="services">
        <Service />
        <ServiceShape />
      </Container>
      <Container id="portfolio">
        <Portfolio />
        <PortfolioShape />
      </Container>
      <Container id="contact">
        <ContactShape />
      </Container>
      <TopButton
        visible={visible}
        onClick={scrollToTop}
        navigateTo={navigateTo}
        activeMenuItem={activeMenuItem}
      />
    </ThemeProvider>
  );
};

export default App;
