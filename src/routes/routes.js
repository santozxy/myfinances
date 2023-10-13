import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen'
import DrawerNavigator from './DrawerNavigator';
import AddTransaction from '../screens/AddTransaction';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="Home" component={DrawerNavigator} />
            <Stack.Screen name="AddTransaction" component={AddTransaction} />
        </Stack.Navigator>
    );
}
