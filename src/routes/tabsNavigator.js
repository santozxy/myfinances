import { Platform, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons, } from '@expo/vector-icons';

import Home from '../screens/Home';
import Goals from '../screens/Goals'

import {
    secundary,
    terciary,
} from '../theme/theme';

const Tab = createBottomTabNavigator();

export default function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: secundary,
                    borderTopWidth: 0,
                    borderRadius: Platform.OS === 'ios' ? 0 : 20,
                    height: Platform.OS === 'ios' ? 70 : 50,
                    right: Platform.OS === 'ios' ? 0 : 110,
                    left: Platform.OS === 'ios' ? 0 : 110,
                    bottom: Platform.OS === 'ios' ? 10 : 10,
                    paddingBottom: Platform.OS === 'ios' ? 5 : 0,
                },
            }}>
            <Tab.Screen
                name="HomeTab"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return (
                                <View style={{ borderColor: terciary, borderBottomWidth: 4, margin: 2 }}>
                                    <Ionicons
                                        name="home"
                                        size={Platform.OS === 'ios' ? 38 : 30}
                                        color={terciary}
                                    />
                                </View>
                            );
                        }
                        return (
                            <Ionicons
                                name="home-outline"
                                size={Platform.OS === 'ios' ? 38 : 30}
                                color={color}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Goals"
                component={Goals}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return (
                                <View style={{ borderColor: terciary, borderBottomWidth: 4, margin: 2 }}>
                                    <MaterialCommunityIcons
                                        name="clipboard-list"
                                        size={Platform.OS === 'ios' ? 38 : 30}
                                        color={terciary}
                                    />
                                </View>
                            );
                        }
                        return (
                            <MaterialCommunityIcons
                                name="clipboard-list-outline"
                                size={Platform.OS === 'ios' ? 38 : 30}
                                color={color}
                            />
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
}
