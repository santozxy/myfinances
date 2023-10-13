import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen'
import Home from '../screens/Home';
import AddTransaction from '../screens/AddTransaction';

const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AddTransaction" component={AddTransaction} />
        </Stack.Navigator>
    );
}