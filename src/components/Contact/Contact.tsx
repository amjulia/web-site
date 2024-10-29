import { useState } from "react";
import FormComponent from "../FormComponent/FormComponent";
import * as Styles from "./Contact.styled";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false); 

  const handleFormSubmit = () => {
    setIsSubmitted(true); 
  };

  return (
    <Styles.Wrapper>
      <Styles.Container>
        {isSubmitted ? (
          <h2>Message generated on the server.</h2>
        ) : (
          <>
            <h2>Only CTA on the page</h2>
            <FormComponent onSubmit={handleFormSubmit} />
          </>
        )}
      </Styles.Container>
    </Styles.Wrapper>
  );
};

export default Contact;


