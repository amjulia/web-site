import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1260px;
  margin: 0 auto;
`;

export const Container = styled.main`
  border-top: 1px solid #ccc;
  width: 100%;
  height: auto;
  padding: 40px 30px;
  display: flex;
  gap: 30px;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

export const TextContainer = styled.div``;

export const Head = styled.h1`
  padding-bottom: 20px;
  font-size: 40px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const Title = styled.h2`
  padding-top: 40px;
  padding-bottom: 70px;
  font-size: 30px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 24px;
    padding-bottom: 40px;
  }
`;

export const VideoContainer = styled.div``;

export const TitleBox = styled.div`
  padding: 40px 30px;
  display: flex;
  justify-content: space-around;
  row-gap: 50px;
  column-gap: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const TitleBoxContent = styled.div`
padding: 20px;
  width: 25%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease-out;
  &:hover{
   transform: scale(110%);
  }
 

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const TitleBoxHead = styled.h4`
  font-size: 20px;
`;

export const TitleBoxText = styled.p`
  padding-top: 16px;
  font-size: 14px;
  color: #8b8386;
`;

export const LessTitle = styled.h3`
  padding-top: 40px;
  padding-bottom: 30px;
  font-size: 30px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const ButtonContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
`;

export const BlockContent = styled.div`
  border-bottom: 1px solid #ccc;
  width: 100%;
  padding: 40px 30px;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

