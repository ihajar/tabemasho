import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const RestaurantItem = ({ restaurant }) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Restaurant', { id: restaurant.id });
  }
 
  return (
    <Pressable onPress={onPress} style={styles.restaurantContainer}>
      <View style={{backgroundColor: 'white', display: 'flex', flexDirection: 'column', margin: 15, borderRadius:20}}>
        <Image 
          source={{ uri: restaurant.image }} 
          style={styles.image}
        />

        <View style={styles.row}>
          <View style={styles.col}>
              <Text style={styles.title}>{restaurant.name}</Text>
              <Text style={styles.subtitle} >$ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime} - 
                      {restaurant.maxDeliveryTime} minutes
              </Text>
          </View>
          <View style={styles.rating}>
            <AntDesign name="star" size={30} color="#F1C260" />
              <Text style={{fontSize: 16}}>{restaurant.rating}</Text>
          </View>
        </View>
      </View>
      
      
    </Pressable>
  )
};

export default RestaurantItem;

const styles = StyleSheet.create({
    
    restaurantContainer: {
      width: "100%",
      flex: 1,
      height:'100%'
    },
    image: {
      width: "100%",
      aspectRatio: 5 / 3,
      marginBottom: 5,
      borderTopEndRadius: 20,
      borderTopStartRadius: 20,
    },
    title: {
      fontSize: 16,
      fontWeight: "bold",
      paddingBottom: 5
    },
    subtitle: {
      color: "grey",
      fontSize: 14,
      paddingBottom: 5,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        
    },
    col: {
        padding: 10,
    },
    rating: {
        marginLeft: "auto",
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 10,
        marginRight: 5,
        display: 'flex',
        flexDirection: 'row',
        padding: 10
    },
  });
  
