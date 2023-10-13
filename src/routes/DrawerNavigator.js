import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native';
import Home from '../screens/Home';
import Goals from '../screens/Goals';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    const { colors } = useTheme();
    return (
        <Drawer.Navigator screenOptions={{
            headerShown: false,
            drawerStyle: {
                backgroundColor: colors.secondary,
                paddingTop: 20
            },
            drawerActiveBackgroundColor: colors.terciary,
            drawerActiveTintColor: colors.primary,
            drawerInactiveTintColor: '#ccc'
        }}>
            <Drawer.Screen
                name="HomeDrawer"
                options={{
                    title: 'Início',
                    drawerIcon: ({ focused, size, color }) => (
                        <MaterialCommunityIcons
                            name={focused ? 'home' : 'home-outline'}
                            size={size}
                            color={color}
                        />
                    )
                }}
                component={Home} />

            <Drawer.Screen
                name="Goals"
                options={{
                    title: 'Caixinhas',
                    drawerIcon: ({ focused, size, color }) => (
                        <MaterialCommunityIcons
                            name={focused ? 'clipboard-list' : 'clipboard-list-outline'}
                            size={size}
                            color={color}
                        />
                    )
                }}
                component={Goals} />
        </Drawer.Navigator>
    );
}

