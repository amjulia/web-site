import styled from "styled-components";
import { Input, Button } from "antd";

export const FormContainer = styled.footer`
  padding-top: 30px;
  max-width: 300px; 
  border-radius: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  background: #fff;
  box-shadow: 0 0 5px rgba(44, 44, 44, 0.5);
  padding: 20px; 

  @media (max-width: 768px) {
    padding: 10px; 
  }
`;

export const StyledInput = styled(Input)`
  margin-top: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  width: 100% !important;
  transition: border-color 0.3s;

  &:focus {
    border-color: rgb(44, 44, 44);
    box-shadow: 0 0 5px rgba(44, 44, 44, 0.5);
  }

  &:hover {
    border-color: #888;
  }
`;

export const StyledTextArea = styled(Input.TextArea)`
  margin-top: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
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



