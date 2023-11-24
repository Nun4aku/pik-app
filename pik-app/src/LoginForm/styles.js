import InputMask from "react-input-mask";
import styled, { css } from "styled-components";

const errorStyles = css`
  border: 2px solid red;
`;

export const InputMaskStyled = styled(({ error, ...rest }) => (
  <InputMask {...rest} />
))`
  ${({ error }) => error === "true" && errorStyles};
`;

export const Input = styled(({ error, ...rest }) => <input {...rest} />)`
  ${({ error }) => error === "true" && errorStyles};
`;

export const FormContainer = styled.div`
  max-width: 544px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const HorizontalInputs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const VerticalInputs = styled.div``;

export const OneInput = styled.div`
  border: SOLID 1px #dcdce6;
  border-radius: 4px;
`;

export const Label = styled.label``;

export const BackgroundImage = styled.div`
  background-image: url("https://0.pik.ru.cdn.pik-service.ru/undefined/2021/08/03/dji_0093.rev00_wj16guVhKoupGK8K.jpg");
  background-size: cover;
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const Form = styled.form`
  background: white;
  padding: 56px;
  border-radius: 8px;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: -8px;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
