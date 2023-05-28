import { useState } from "react";
import Reaptcha from "reaptcha";
import styled from "styled-components";
import Business from "../assets/img/Business.png";

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const Left = styled.div`
  width: 30%;
  height: 100%;
`;

const Right = styled.div`
  width: 70%;
`;

const Image = styled.img`
  width: 100%;
  margin-top: 75%;
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Title = styled.h1``;

const Card = styled.div`
  height: max-content;
  margin: 20px auto;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 25px;
  background-color: #ffff;
  box-shadow: 2px 2px 5px gray;
`;

const CardTitle = styled.h2`
  text-align: center;
`;

const CardContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  width: 100%;
`;

const FormControl = styled.div`
  display: flex;
  padding: 8px;
  flex-direction: column-reverse;
  position: relative;
  width: ${({ w }) => 100 * w + "%"};
  .control-label {
    position: absolute;
    top: 20px;
    left: 30px;
    background-color: #fff;
    width: max-content;
    padding: 0;
    z-index: 0;
    transition: all 0.2s ease-in-out;
    font-size: 14px;
    color: ${({ theme }) => theme.color.text.tertiary};
  }
  .control-input {
    padding: 10px 20px;
    border-radius: 10px;
    z-index: 1;
    border: 1px solid #adadad;
    outline: none;
    font-size: 14px;
    background-color: transparent;
    resize: none;

    &:focus,
    :valid {
      border-color: ${({ theme }) => theme.color.main};
      ~ .control-label {
        color: ${({ theme }) => theme.color.main};
        top: -2px;
        font-size: 12px;
        padding: 4px;
        z-index: 2;
      }
    }
  }
`;

const Button = styled.button`
  margin-top: auto;
  margin-left: auto;
  letter-spacing: 1.5px;
  padding: 15px 25px;
  background-color: #0059b3;
  font-weight: bold;
  border-radius: 10px;
  color: white;
  border: none;
  cursor: pointer;
  outline: none;
`;

const WrapperButtons = styled.div`
  display: flex;
  width: 100%;
  padding: 0 10px;
  height: 75px;
  justify-content: space-between;
`;

const initialValues = {
  name: {
    label: "Nome",
    value: "",
    w: 1,
    Input: (props) => <input {...props} />,
  },
  email: {
    label: "Email",
    value: "",
    w: 1 / 2,
    Input: (props) => <input {...props} />,
  },
  phoneNumber: {
    label: "Telefone",
    value: "",
    w: 1 / 2,
    Input: (props) => <input {...props} />,
  },
  tel: {
    label: "Me diz o que você quer desenvolver",
    value: "",
    w: 1,
    Input: (props) => <textarea style={{ height: "150px" }} {...props} />,
  },
};

const Contact = () => {
  const [values, setValues] = useState(initialValues);
  const [isValid, setIsvalid] = useState(false);

  const onChangeValue = (ev) => {
    const { name, value } = ev.target;
    setValues({ ...values, [name]: { ...values[name], value } });
  };

  const sendMessage = () => {};

  return (
    <Container>
      <Left>
        <Image src={Business} alt="business" />
      </Left>
      <Right>
        <Wrapper>
          <Title>
            Deixa eu lhe apresentar a melhor solução online para o seu negócio!
          </Title>
          <Card>
            <CardTitle> Vamos desenvolver uma solução juntos!</CardTitle>
            <CardContent>
              {Object.entries(values).map(
                ([key, { label, value, w, Input }], index) => (
                  <FormControl w={w} key={index}>
                    <Input
                      required
                      className="control-input"
                      type="text"
                      name={key}
                      value={value}
                      onChange={onChangeValue}
                      id={key}
                      autoComplete={key}
                    />
                    <label className="control-label" htmlFor={key}>
                      {label}
                    </label>
                  </FormControl>
                )
              )}
              <WrapperButtons>
                <Reaptcha
                  sitekey="6Lc4bEcmAAAAAObaTvnBbRpT9hJ1P8aj3iinUhMM"
                  onVerify={() => setIsvalid(true)}
                />
                <Button disabled={!isValid} onClick={sendMessage}>
                  Enviar
                </Button>
              </WrapperButtons>
            </CardContent>
          </Card>
        </Wrapper>
      </Right>
    </Container>
  );
};

export default Contact;
