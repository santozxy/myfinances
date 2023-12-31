import { Container, TitleContainer, FirstTitle, SecondTitle } from "./styles";
import LottieView from "lottie-react-native";

export default function SplashScreen({ navigation }) {
  return (
    <Container>
      <TitleContainer>
        <FirstTitle>My</FirstTitle>
        <SecondTitle>Finances</SecondTitle>
      </TitleContainer>
      <LottieView
        source={{
          uri: "https://assets2.lottiefiles.com/packages/lf20_vo0zbstd.json",
        }}
        autoPlay
        loop={false}
        onAnimationFinish={() => {
          navigation.replace("Home");
        }}
        style={{
          width: 400,
          height: 320,
        }}
      />
    </Container>
  );
}
