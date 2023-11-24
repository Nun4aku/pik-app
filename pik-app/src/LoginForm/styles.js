import InputMask from "react-input-mask";
import styled, { css } from "styled-components";


const errorStyles = css`
  border: 2px solid red;
`;

export const InputMaskStyled = styled(InputMask)`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  ${({ error }) => error && errorStyles};
`;

export const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

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
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const Label = styled.label`
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  ${({ error }) => error && errorStyles};
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

