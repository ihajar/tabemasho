import {Image, View, Text, StyleSheet, FlatList} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import CartDishItem from '../../components/CartDishItem';
import restaurants from '../../../assets/data/restaurants.json'

const restaurant = restaurants[0];


const Cart = () => {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <Text style={styles.title}>Cart</Text>
                <View style={styles.itemsCounter}></View>
            </View>
            <FlatList  
                data={restaurant.dishes}
                renderItem={({item}) => <CartDishItem cartDish={item} />}
            />
             <View style={styles.totalContainer}>
                <Text style={{color: 'white', fontSize: 15}}>Total Amount:</Text>
                <Text style={{color: 'white', fontSize: 22 , fontWeight: '700', padding: 2}}>$</Text>

            </View>
            <View style={styles.button}>
                    <Text style={styles.btnText}>
                        Make Payment
                    </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {   
        flex: 1,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#F3F3F7'
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 50,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold'
    },
    itemsCounter: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#B7E1C9',
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    totalContainer: {
        backgroundColor: '#F4AA90',
        display: 'flex',
        flexDirection: 'column',
        margin: 10,
        padding:10,
        // height: 50,
        marginHorizontal: 20,
        borderRadius: 20,
    },
    button: {
        backgroundColor: '#1A1B26',
        marginTop: "auto", 
        marginBottom: 30,
        alignItems: 'center',
        padding: 20,
        justifyContent: 'center',
        marginHorizontal: 20,
        borderRadius: 20,
    },
    btnText: {
        color: 'white',
        fontSize: 22,
        fontWeight: '700'
    },
});


export default Cart;