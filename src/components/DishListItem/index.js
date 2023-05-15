import {View, Text, StyleSheet, Image} from 'react-native'

const DishListItem = ({ dish }) => {
    return (

        <View style={styles.container}>
            <View style={{display: 'flex', flexDirection: 'column', backgroundColor: 'white', margin: 5, width: '90%',
                            borderRadius: 20
            }}>
                <View style={styles.row}>
                    {dish.image &&  (<Image source={{ uri: dish.image }} style={styles.image} />)}
                    <View style={styles.dishContainer}>
                        <View style={styles.infoContainer}>
                            <Text style={styles.title}>{dish.name}</Text>
                            <Text style={styles.description} numberOfLines={2}>{dish.description}</Text>
                        </View>
                        <View style={styles.priceContainer}>
                            <Text style={styles.price}>$ {dish.price}</Text>
                        </View>
                    </View>
                </View>
            </View>
           
        </View>
    )

}

const styles = StyleSheet.create({ 
   container: {
    flex: 1,
    position: 'relative',
    width: '100%', 
    marginTop: 20,
    height: '100%',
    alignItems:'center'
    
   },
   row: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    // backgroundColor: '#F4F5F6',
    borderRadius: 20,
   },
   image: {
        
    width: '100%',
    height: 120,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    },
    dishContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '75%',
    },
    title: {
        fontSize: 18,
        fontWeight: 'semibold',
        paddingVertical: 5,
        paddingLeft: 5,
    },
    description: {
        fontSize: 15,
        color: 'grey',
        paddingBottom: 10,
        paddingLeft: 5,
    },
    priceContainer: {
        maxWidth: '20%',
        width: 50,
        height: 50,
        backgroundColor: '#FFEFEB',
        borderRadius: 50,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    price: {
        fontSize: 14, 
        fontWeight: 'bold',
        color: 'grey', 
        padding: 2,
    },
});

export default DishListItem;