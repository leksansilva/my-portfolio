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
  z-index: 0;
  transition: clip-path 2s ease-in-out;
  ${({ showMore }) =>
    showMore &&
    css`
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    `}
  background-color: ${({ theme }) => theme.color.shadow.secondary};
`;

const IntroShapeContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 20px;
  font-size: 24px;
  width: 50%;
  gap: 10px;
  .quote {
    margin-top: 20px;
    font-style: italic;
    font-weight: 300;
  }
  .click-me {
    margin-top: 20px;
    span {
      border: solid 1px white;
      padding: 10px 15px;
      background-color: #4da6ff;
      font-weight: bold;
      border-radius: 10px;
      color: white;
    }
  }
  flex-direction: column;
  color: white;
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
  clip-path: polygon(0 0, 10% 0, 50% 100%, 0 100%);
  background-color: ${({ theme }) => theme.color.monochrome.primary};
`;

const App = () => {
  const [visible, setVisible] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("");
  const [showMore, SetShowMore] = useState(false);

  const toggleVisible = (ev) => {
    if (window.scrollY > 600) {
      setVisible(true);
    } else if (window.scrollY <= 600) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const navigateTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView();
    setActiveMenuItem(id);
  };
  const yearsOld = () => {
    return (
      new Date().getFullYear() - new Date("2000-06-15T03:24:00").getFullYear()
    );
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
          <IntroShapeContainer>
            <h1>Alex Santos da Silva, {yearsOld()} anos </h1>
            <p>Salvador-BA</p>
            <div className="quote">
              "Pensamentos levam a sentimentos, sentimentos levam a ações e
              ações levam a resultados"
              <sub> - T. Harv Eker</sub>
            </div>
            <div className="click-me">
              Clique no botão e saiba <span>MAIS SOBRE MIM</span>
            </div>
          </IntroShapeContainer>
        </IntroShape>
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
