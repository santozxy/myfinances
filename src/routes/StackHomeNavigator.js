import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import AddTransaction from "../screens/AddTransaction";

const Stack = createStackNavigator();

export default function StackHomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="AddTransaction"
        component={AddTransaction}
        options={{
          presentation: "modal",
          animationEnabled: true,
          gestureDirection: "vertical",
        }}
      />
    </Stack.Navigator>
  );
}
