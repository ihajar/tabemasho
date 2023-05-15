
import { StyleSheet, FlatList, View } from 'react-native';
import RestaurantItem from '../../components/RestaurantItem/index';
import restaurants from '../../../assets/data/restaurants.json'


export default function HomeScreen() {
  return (

     <View style={styles.page} >
        <FlatList 
          data={restaurants} 
          renderItem={({ item }) => <RestaurantItem restaurant={item} /> } 
          showsVerticalScrollIndicator={false}
          />
     </View>
  );
}
 

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#F3F3F7',
    height: '100%'
  },
});
