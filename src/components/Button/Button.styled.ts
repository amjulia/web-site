import styled from "styled-components";
import { Button } from "antd";

export const StyledButton = styled(Button)`
  border: none;
  cursor: pointer;
  color: #fff;
  padding: 10px 40px;
  background-color: rgb(44, 44, 44);
  transition: background-color 0.4s ease !important;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2) !important;
    background-color: #f5f5f5 !important;
    color: rgb(44, 44, 44) !important;
   
  }
`;