import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import Reaptcha from "reaptcha";
import styled, { css } from "styled-components";
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
  margin-top: 90%;
  z-index: 1;
  position: relative;
  pointer-events: none;
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
  width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 25px;
  background-color: #ffff;
  z-index: ${({ showMore }) => (showMore ? 0 : 1)};
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

    :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:focus {
      -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    }

    &:focus,
    :valid {
      border-color: ${({ theme }) => theme.color.main};
      ~ .control-label {
        color: ${({ theme }) => theme.color.main};
        top: -2px;
        font-size: 12px;
        padding: 2px 4px;
        z-index: 2;
        border-radius: 10px;
      }
    }
  }
`;

const Button = styled.button`
  margin-top: auto;
  margin-left: auto;
  letter-spacing: 1.5px;
  padding: 15px 30px;
  width: 160px;
  height: 50px;
  background-color: ${({ theme }) => theme.color.main};
  font-weight: bold;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.color.text.secondary};
  border: none;
  cursor: pointer;
  outline: none;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  ${({ theme, isValid }) =>
    !isValid &&
    css`
      background-color: ${theme.color.text.secondary};
      color: ${theme.color.main};
      outline: 1px solid ${({ theme }) => theme.color.main};
    `}
`;

const WrapperButtons = styled.div`
  display: flex;
  width: 100%;
  padding: 0 10px;
  height: 75px;
  justify-content: space-between;
`;

const Loading = styled.div`
  position: relative;
  .step-1 {
    animation: rotation 1s infinite linear;
    position: relative;
  }
  .step-2 {
    animation: rotation 1.5s infinite linear;
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .step-3 {
    animation: rotation 2s infinite linear;
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  @keyframes rotation {
    0% {
      transform: rotate(0);
    }
    50% {
      opacity: 0.5;
    }
    100% {
      transform: rotate(360deg);
      opacity: 1;
    }
  }
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
  tel: {
    label: "Telefone",
    value: "",
    w: 1 / 2,
    Input: (props) => <input {...props} />,
  },
  description: {
    label: "Me diz o que você quer desenvolver",
    value: "",
    w: 1,
    Input: (props) => <textarea style={{ height: "150px" }} {...props} />,
  },
};

const Contact = ({ showMore }) => {
  const [values, setValues] = useState(initialValues);
  const [isValid, setIsvalid] = useState(false);
  const [loading, settLoading] = useState(false);
  const [sended, setSended] = useState(false);

  const onChangeValue = (ev) => {
    const { name, value } = ev.target;
    setValues({ ...values, [name]: { ...values[name], value } });
  };

  const sendMessage = () => {
    settLoading(true);
    setTimeout(() => {
      settLoading(false);
      setSended(true);
    }, 2000);
  };

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
          <Card showMore={showMore}>
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
                  onExpire={() => setIsvalid(false)}
                  sitekey="6Lc4bEcmAAAAAObaTvnBbRpT9hJ1P8aj3iinUhMM"
                  onVerify={() => setIsvalid(true)}
                />
                <Button
                  isValid={isValid}
                  disabled={!isValid}
                  onClick={sendMessage}
                >
                  {sended ? "Enviado" : loading ? "Enviando" : "Enviar"}
                  {sended ? (
                    <BsCheckLg size="15" />
                  ) : loading ? (
                    <Loading>
                      <AiOutlineLoading className="step-1" size="15" />
                      <AiOutlineLoading className="step-2" size="15" />
                      <AiOutlineLoading className="step-3" size="15" />
                    </Loading>
                  ) : (
                    <IoMdSend size="15" />
                  )}
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
