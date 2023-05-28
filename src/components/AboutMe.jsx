import styled from "styled-components";

const Container = styled.div`
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
const yearsOld = () => {
  if (new Date().getMonth() < new Date("2000-06-15T03:24:00").getMonth())
    return (
      new Date().getFullYear() -
      new Date("2000-06-15T03:24:00").getFullYear() -
      1
    );
  return (
    new Date().getFullYear() - new Date("2000-06-15T03:24:00").getFullYear()
  );
};

const age = yearsOld();

const AboutMe = () => {
  return (
    <Container>
      <h1>Alex Santos da Silva, {age} anos </h1>
      <p>Salvador-BA</p>
      <div className="quote">
        "Pensamentos levam a sentimentos, sentimentos levam a ações e ações
        levam a resultados"
        <sub> - T. Harv Eker</sub>
      </div>
      <div className="click-me">
        Clique no botão e saiba <span>MAIS SOBRE MIM</span>
      </div>
    </Container>
  );
};

export default AboutMe;
