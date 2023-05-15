import {View, Text, Image} from 'react-native';

import {AntDesign} from '@expo/vector-icons';
import styles from './styles';



const RestaurantHeader = ({restaurant}) => {
    return (
        <View style={styles.page}>
             <Image 
                source={{ uri: restaurant.image}} 
                style={styles.image}
                resizeMode='cover'
            />
            <View style={styles.iconContainer}>
                <AntDesign
                    name='leftcircle'
                    size={45}
                    color={"white"}
                    style={styles.imageIcon}
                />
            </View>
            
            <View style={styles.container}>
                <View style={styles.RestoContainer}>
                    <View style={styles.infoContainer}>
                        <Text style={styles.title} >{restaurant.name}</Text>
                        <Text style={styles.subtitle} >$ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime} - 
                            {restaurant.maxDeliveryTime} minutes
                        </Text>
                    </View>
                    <View style={styles.ratingContainer}>
                        <AntDesign name="star" size={24} color="#FBCC0E" />
                        <Text style={styles.rating}>{restaurant.rating}</Text>
                    </View>
                    
              
                </View> 
                <View style={styles.menuContainer}>
                    <Text style={styles.menu}>Menu</Text>
                </View>
               
            </View>
           
        </View> 
    )
}


export default RestaurantHeader;
