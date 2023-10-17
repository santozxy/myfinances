import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import SplashScreen from "../screens/SplashScreen";
import StackHomeNavigator from "./StackHomeNavigator";
import StackGoalsNavigator from "./StackGoalsNavigator";
import { useTheme } from "styled-components/native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {
  const { colors } = useTheme();
  function Tabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          
          tabBarStyle: {
            position: "absolute",
            bottom:  Platform.OS === 'ios' ? "6%":"3%",
            left: "10%",
            right: "10%",
            paddingTop: 8,
            paddingBottom: 8,
            borderRadius: 15,
            height: '8.5%',
            backgroundColor: colors.primary,
            justifyContent: "center",
            alignItems: "center",
            borderTopWidth: 0,
            elevation:0,
          },
          tabBarActiveTintColor: colors.white,
          tabBarInactiveTintColor:  colors.gray,
        }}
      >
        <Tab.Screen
          name="Início"
          component={StackHomeNavigator}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return (
                  <Ionicons
                    name="home"
                    size={Platform.OS === "ios" ? 38 : 30}
                    color={colors.white}
                  />
                );
              }
              return (
                <Ionicons
                  name="home-outline"
                  size={Platform.OS === "ios" ? 38 : 30}
                  color={color}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Metas"
          component={StackGoalsNavigator}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return (
                  <MaterialCommunityIcons
                    name="clipboard-list"
                    size={Platform.OS === "ios" ? 38 : 30}
                    color={colors.white}
                  />
                );
              }
              return (
                <MaterialCommunityIcons
                  name="clipboard-list-outline"
                  size={Platform.OS === "ios" ? 38 : 30}
                  color={color}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Tabs} />
    </Stack.Navigator>
  );
}
