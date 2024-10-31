import styled from "styled-components";

export const Container = styled.div`
  border-top: 1px solid #ccc;
  width: 100%;
  min-height: 600px; 
  margin: 0 auto;
  padding: 40px 30px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 2.5rem; 
    padding-bottom: 30px;
    text-align: center; 
  }

  @media (max-width: 768px) {
    padding: 20px 15px; 
    
    h2 {
      font-size: 2rem; 
    }
  }
`;

export const Wrapper = styled.div`
  max-width: 1260px;
  margin: 0 auto;
  width: 100%;
  padding: 0 15px; 
`;
