import { createStackNavigator } from "@react-navigation/stack";

import Goals from "../screens/Goals";
import SelectTypeGoal from "../screens/SelectTypeGoal";
import AddGoals from "../screens/AddGoals";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Goals" component={Goals} />
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
