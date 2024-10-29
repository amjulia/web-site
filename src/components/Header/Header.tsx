import { Link } from "react-router-dom";
import * as Styles from "./Header.styled";
import Button from "../Button/Button";

const Header = () => (
  <Styles.Container>
    <Styles.HeaderContainer>
      <Styles.Navbar>
        <Link to="/">
          <Styles.StyledLink>Some Company</Styles.StyledLink>
        </Link>
        
         <Button />
        
      </Styles.Navbar>
    </Styles.HeaderContainer>
  </Styles.Container>
);

export default Header;
