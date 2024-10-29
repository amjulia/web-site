import styled from 'styled-components';
import * as Styles from "./MainContent/MainContent.styled";

const FooterContainer = styled.footer`
display: flex;
justify-content: center;
padding-bottom: 70px;
margin-top: 90px;
  width: 100%;
  background: #fff;
  p {
    font-size: 20px;
    font-weight: 500;
  }
`;

const Footer = () => (
  <Styles.Wrapper>
<FooterContainer>
    <p>Some Company 2024</p>
  </FooterContainer>
  </Styles.Wrapper>
  
);

export default Footer;
