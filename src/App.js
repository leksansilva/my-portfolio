import styled from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";


const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const IntroShape = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
clip-path: polygon(70% 0, 100% 0, 100% 100%, 48% 100%);
z-index: -1;
background-color: #4DA6FF;
`



const App = () => {
  return (
    <Container>
      <Navbar />
      <Intro/>
      <IntroShape/>
    </Container>
  );
};

export default App;
