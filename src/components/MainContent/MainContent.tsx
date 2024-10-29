import Button from "../Button/Button";
import VideoComponent from "../VideoComponent";
import * as Styles from "./MainContent.styled";

const MainContent = () => {
  return (
    <Styles.Wrapper>
      <Styles.Container>
        <Styles.TextContainer>
          <Styles.Head>Добро пожаловать на главную страницу</Styles.Head>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident,
            corrupti minima. Quibusdam, asperiores culpa debitis totam velit
            ipsum temporibus minus similique accusamus error perspiciatis
            laboriosam deleniti voluptatum maxime! Consequatur, adipisci.
          </p>
        </Styles.TextContainer>

        <Styles.VideoContainer>
          <VideoComponent />
        </Styles.VideoContainer>
        
      </Styles.Container>
      <Styles.Title>Also very important title</Styles.Title>
      <Styles.TitleBox>
        <Styles.TitleBoxContent>
          <Styles.TitleBoxHead>Title</Styles.TitleBoxHead>
          <Styles.TitleBoxText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis, leo et condimentum
          </Styles.TitleBoxText>
        </Styles.TitleBoxContent>
        <Styles.TitleBoxContent>
          <Styles.TitleBoxHead>Title</Styles.TitleBoxHead>
          <Styles.TitleBoxText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis, leo et condimentum
          </Styles.TitleBoxText>
        </Styles.TitleBoxContent>
        <Styles.TitleBoxContent>
          <Styles.TitleBoxHead>Title</Styles.TitleBoxHead>
          <Styles.TitleBoxText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis, leo et condimentum
          </Styles.TitleBoxText>
        </Styles.TitleBoxContent>
        <Styles.TitleBoxContent>
          <Styles.TitleBoxHead>Title</Styles.TitleBoxHead>
          <Styles.TitleBoxText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis, leo et condimentum
          </Styles.TitleBoxText>
        </Styles.TitleBoxContent>
        <Styles.TitleBoxContent>
          <Styles.TitleBoxHead>Title</Styles.TitleBoxHead>
          <Styles.TitleBoxText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis, leo et condimentum
          </Styles.TitleBoxText>
        </Styles.TitleBoxContent>
        <Styles.TitleBoxContent>
          <Styles.TitleBoxHead>Title</Styles.TitleBoxHead>
          <Styles.TitleBoxText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis, leo et condimentum
          </Styles.TitleBoxText>
        </Styles.TitleBoxContent>
      </Styles.TitleBox>

      <Styles.ButtonContainer>
        <Button />
      </Styles.ButtonContainer>

      <Styles.BlockContent>
        <Styles.LessTitle>Less important title</Styles.LessTitle>
        <Styles.ButtonContainer>
          <Button />
        </Styles.ButtonContainer>
      </Styles.BlockContent>
    </Styles.Wrapper>
  );
};
export default MainContent;
