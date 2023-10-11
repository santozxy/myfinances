import { createStackNavigator } from '@react-navigation/stack';

import Tabs from './tabsNavigator';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="Home" component={Tabs} />
        </Stack.Navigator>
    );
}
