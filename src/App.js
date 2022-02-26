import styled from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  scroll-snap-align: start;
`;

const IntroShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(70% 0, 100% 0, 100% 100%, 48% 100%);
  z-index: -1;
  background-color: #4da6ff;
`;


const TopButton = styled.button`
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 2;
  padding: 5px 10px;
  border-radius: 5px;
  border: 2px solid white;
  background-color: #0059b3;
  color: white;
  cursor: pointer;
  font-size: 25px;
  display: ${({ visible }) => (visible ? "inline" : "none")};
`;


const AboutShape = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  clip-path: polygon(0 0, 48% 0, 30% 100%, 0 100%);
  z-index: -1;
  background-color: #0059b3;
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
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntroShape />
      </Container>
      <Container>
        <About state={visible} />
        <AboutShape />
      </Container>
      <TopButton visible={visible} onClick={scrollToBottom}>
        <MdKeyboardArrowUp />
      </TopButton>
    </>
  );
};

export default App;
