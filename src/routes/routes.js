import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import StackHomeNavigator from "./StackHomeNavigator";
import StackGoalsNavigator from "./StackGoalsNavigator";

const Drawer = createDrawerNavigator();

export default function Routes() {
  const { colors } = useTheme();
  return (
    <Drawer.Navigator
      screenOptions={{
        swipeMinDistance: 10,
        swipeEdgeWidth: 10,
        headerShown: false,
        drawerStyle: {
          backgroundColor: colors.secondary,
          paddingTop: 20,
        },
        drawerActiveBackgroundColor: colors.terciary,
        drawerActiveTintColor: colors.primary,
        drawerInactiveTintColor: "#ccc",
      }}
    >
      <Drawer.Screen
        name="HomeDrawer"
        options={{
          title: "Início",
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
        component={StackHomeNavigator}
      />

      <Drawer.Screen
        name="GoalsDrawer"
        options={{
          title: "Metas",
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? "clipboard-list" : "clipboard-list-outline"}
              size={size}
              color={color}
            />
          ),
        }}
        component={StackGoalsNavigator}
      />
    </Drawer.Navigator>
  );
}
