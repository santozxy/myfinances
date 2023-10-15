import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-toast-message";
import Routes from "./src/routes/routes";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme/theme";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar barStyle={"light-content"} />
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
