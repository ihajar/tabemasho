import {Image, View, Text, StyleSheet} from 'react-native'


const CartDishItem = ({cartDish}) => {
    return (
        <View style={styles.itemsContainer}>
            <View style={styles.itemsDtls}>
                <Text style={styles.itemQtity}>1</Text>
                <Image source={{ uri: cartDish.image}} style={styles.itemImage} />
                <Text style={styles.itemTitle}>{cartDish.name}</Text>
            </View>
            <Text style={styles.itemPrice}>$ {cartDish.price}</Text>
           
        </View>
    )
};


const styles = StyleSheet.create({
    itemsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
        backgroundColor: 'white',
        padding: 10,
    },
    itemsDtls: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flex: 1,
        alignItems: 'center',
    },
    itemQtity: {
        // paddingRight: 10,
        fontSize: 18,
        padding: 10,
    },
    itemImage: {
        width: 60,
        height: 50,
        borderRadius: 50,
    },
    itemTitle: {
        paddingLeft: 10,
        width: '50%',
        fontSize: 18,
    },
    itemPrice: {
        paddingRight: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#191A24'
    },

    
});

export default CartDishItem;