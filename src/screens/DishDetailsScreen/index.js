import { useState } from 'react';
import {Image, View, Text, StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import restaurants from '../../../assets/data/restaurants.json'

const dish = restaurants[0].dishes[0];


const DishDetailsScreen = () => {
    const [quantity, setQuantity] = useState(1);
    const onMinus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1) 
        }
        
    };
    const onPlus = () => {
        setQuantity(quantity + 1)
    };

    const getTotal = () => {
        return (dish.price * quantity).toFixed(2);
        
    };

    return (
        <View style={styles.page}>
            <View style={styles.dishContainer}>
                <Image source={{ uri: dish.image }} 
                    style={styles.image} 
                    resizeMode='contain'
                />
                <Text style={styles.name}>{dish.name}</Text>
                <View style={styles.container}>
                        <View style={styles.clockContainer}>
                            <AntDesign name="clockcircleo" size={24} color="#9DD9D2" />
                            <Text style={styles.clock}>{dish.deliveryClock}</Text>
                        </View>
                        <View style={styles.rateContainer}>
                            <AntDesign name="staro" size={24} color="#9DD9D2" />
                            <Text style={styles.rating}>{dish.rating}</Text>

                        </View>
                </View>
                <View style={styles.priceContainer}>
                    
                    <AntDesign name="minuscircle" size={40} color="#ED764C" 
                        onPress={onMinus}
                    />
                    <Text style={styles.number}>{quantity}</Text>
                    <AntDesign name="pluscircle" size={40} color="#ED764C" 
                        onPress={onPlus}
                    />
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.detailsTitle}>Details</Text>
                    <Text style={styles.description}>{dish.description}</Text>
                    
                </View>

                
            </View>
            <View style={styles.button}>
                    <Text style={styles.btnText}>
                        Add  {quantity}  to order &#8226; $ {getTotal()}
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
        backgroundColor: '#F3F3F7',
    },
    dishContainer: {
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 40,
       
    },
    image: {
        width: 220,
        height: 180,
        borderRadius: 100/2,
        
    },
    priceContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '30%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
    },
    container: {
        // backgroundColor: 'white',
        height: 40,
        justifyContent: 'center',
        padding: 5,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        width: '45%', 
        justifyContent: 'space-between',
    },
    clockContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    clock: {
        fontSize: 15,
        alignItems: 'center',
        textAlign: 'center',
        padding: 5,
    },
    rating: {
        fontSize: 15,
        alignItems: 'center',
        textAlign: 'center',
        padding: 5,
    },
    rateContainer: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    number: {
        fontSize: 25,
        fontWeight: '700'
    },
    name: {
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 5,
        marginTop: 20,
    },
 
    price: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    detailsContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginVertical: 20,
        justifyContent: 'center',
        
    },
    detailsTitle: {
        fontSize: 22,
        fontWeight: '600',
        textAlign: 'center',
        paddingBottom: 10,
    },
    description: {
        fontSize: 18,
        color: '#323449',
    },
    button: {
        backgroundColor: '#1A1B26',
        marginTop: "auto", 
        marginBottom: 30,
        alignItems: 'center',
        padding: 20,
        justifyContent: 'center',
        marginHorizontal: 40,
        borderRadius: 20,
    },
    btnText: {
        color: 'white',
        fontSize: 22,
        fontWeight: '700'
    },
    
});

export default DishDetailsScreen;