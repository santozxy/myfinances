import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "../screens/SplashScreen";
import Home from "../screens/Home";
import AddTransaction from "../screens/AddTransaction";
import SelectTypeGoal from "../screens/SelectTypeGoal";
import AddGoals from "../screens/AddGoals";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen
        name="SelectTypeGoal"
        component={SelectTypeGoal}
        options={{
          presentation: "modal",
          animationEnabled: true,
          gestureDirection: "vertical",
        }}
      />
      <Stack.Screen name="AddGoals" component={AddGoals} />
    </Stack.Navigator>
  );
}
