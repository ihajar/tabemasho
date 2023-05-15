import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen';
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen';
import DishDetailsScreen from '../screens/DishDetailsScreen';
import Cart from '../screens/Cart';
import OrderScreen from '../screens/OrderScreen';
import OrderDetails from '../screens/OrderDetails';


const Stack = createStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen 
                name='Restaurant' 
                component={RestaurantDetailsScreen} 
                options={{ headerShown: false }}
            
            />

        </Stack.Navigator>
    )
}

export default RootNavigator;