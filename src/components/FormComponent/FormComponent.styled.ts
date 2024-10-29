import styled from 'styled-components';
import { Input, Button } from "antd";
export const FormContainer = styled.footer`
  padding-top: 30px;
  max-width: 300px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  background: #fff;
`;

export const StyledInput = styled(Input)`
  border: 2px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  width: 100%;
  transition: border-color 0.3s;

  &:focus {
    border-color: rgb(44, 44, 44); /* Цвет рамки при фокусе */
    box-shadow: 0 0 5px rgba(44, 44, 44, 0.5); /* Тень при фокусе */
  }

  &:hover {
    border-color: #888; /* Цвет рамки при наведении */
  }
`;

export const StyledTextArea = styled(Input.TextArea)`
  border: 2px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  width: 100%;
  transition: border-color 0.3s;

  &:focus {
    border-color: rgb(44, 44, 44);
    box-shadow: 0 0 5px rgba(44, 44, 44, 0.5);
  }

  &:hover {
    border-color: #888;
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
  background-color: rgb(44, 44, 44);
  transition: background-color 0.4s ease !important;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2) !important;
    background-color: #b1adad !important;
    color: rgb(44, 44, 44) !important;
  }
`;