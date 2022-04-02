import styled, { css, ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";
import theme from "./styles/theme";
import Service from "./components/Service";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  scroll-snap-align: start;
  position: relative;
`;

const Credits = styled.a`
  margin-left: 150px;
  color: rgba(128, 128, 128, 0.5);
  z-index: 1;
  position: absolute;
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

const TopButton = styled.button`
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 2;
  padding: 5px 10px;
  border-radius: 5px;
  border: 2px solid ${({theme})=>theme.color.text.secondary};
  background-color: ${({ theme }) => theme.color.main};
  color: white;
  cursor: pointer;
  font-size: 25px;
  display: ${({ visible }) => (visible ? "inline" : "none")};
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

const App = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 600) {
      setVisible(true);
    } else if (scrolled <= 600) {
      setVisible(false);
    }
  };

  const scrollToBottom = () => {
    window.scrollTo(0, 0);
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Navbar />
        <Intro />
        <IntroShape />
      </Container>
      <Container>
        <About state={visible} />
        <AboutShape />
        <Credits
          target="_blank"
          rel="noreferrer"
          href="https://storyset.com/work"
        >
          art credits for storyset
        </Credits>
      </Container>
      <Container>
        <Service />
        <ServiceShape />
      </Container>
      <TopButton visible={visible} onClick={scrollToBottom}>
        <MdKeyboardArrowUp />
      </TopButton>
    </ThemeProvider>
  );
};

export default App;
