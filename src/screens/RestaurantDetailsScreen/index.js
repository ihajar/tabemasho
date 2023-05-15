import {View, FlatList} from 'react-native';
import restaurants from '../../../assets/data/restaurants.json' 
import styles from './styles';
 
import DishListItem from '../../components/DishListItem';
import RestaurantHeader from '../RestaurantDetailsScreen/Header';

import { useRoute } from '@react-navigation/native';

const restaurant = restaurants[0];

const RestaurantDetailsScreen = () => {
    const route = useRoute();
    const id = route.params?.id;
    console.warn(id);
    
    return (
        <View style={styles.mainPage}>
           
            <FlatList
                ListHeaderComponent={() => <RestaurantHeader restaurant={restaurant}/>}
                data={restaurant.dishes}
                renderItem={({item}) => <DishListItem dish={item} />}
                snapToAlignment='center' decelerationRate={'fast'}
                />
               
                {/* <ScrollView  showsVerticalScrollIndicator={false} marginVertical={10} snapToEnd={true}>
                    <DishListItem dish={restaurant.dishes[0]} />
                    <DishListItem dish={restaurant.dishes[1]} />
                </ScrollView>  */}

                
            
           
        </View> 
    )
}



export default RestaurantDetailsScreen;
