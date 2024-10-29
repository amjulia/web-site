import * as Styles from "./Button.styled";
import { Link } from "react-router-dom";
const Button = () => {
  return (
    <Link to="/contact">
        <Styles.StyledButton type="default">
          Contact us
          </Styles.StyledButton>
    </Link>
    
  )
}

export default Button
