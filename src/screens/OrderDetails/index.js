import { View, Text, Image, FlatList } from 'react-native'
import styles from './styles';
import {AntDesign} from '@expo/vector-icons';

import orders from '../../../assets/data/orders.json'
const order = orders[0];

import restaurants from '../../../assets/data/restaurants.json'
import CartDishItem from '../../components/CartDishItem';


const OrderDetailsHeader = () => {
  return (
    <View>
      <View style={styles.page}>
             <Image 
                source={{ uri: order.Restaurant.image}} 
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
                        <Text style={styles.title} >{order.Restaurant.name}</Text>
                        <Text style={styles.subtitle} >
                            {order.status} &#8226; 2 days ago
                        </Text>
                    </View>
                </View> 
               
                <View style={styles.menuContainer}>
                    <Text style={styles.menu}>Your Orders</Text>
                </View>
            </View>
           
        </View> 
    </View>
  )
}

const OrderDetails = () => {
    return (
        <FlatList
            ListHeaderComponent={OrderDetailsHeader}
            data={restaurants[0].dishes}
            renderItem={({item}) => <CartDishItem cartDish={item} />}
        />
    )
}

export default OrderDetails