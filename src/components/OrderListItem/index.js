import { View, Text, Image, StyleSheet } from 'react-native'


const OrderListItem = ({order}) => {
  return (
    <View >
        <View style={styles.container}>
            <Image source={{uri: order.Restaurant.image}} style={styles.image} />
            <Text style={{ paddingVertical: 10, fontSize: 16, paddingHorizontal: 5, fontWeight: '600'}} >
                {order.Restaurant.name}
            </Text>
            <View style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#191A24', fontSize: 14}}>3 items . $65.40</Text>
                <Text style={{backgroundColor: 'yellow', fontSize: 14, color: '#191A24'}}>{order.status}</Text>
            </View>
        </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 20,
        width: '100%',
    },
    image: {
        width: "100%",
        height: 150,  
        borderRadius: 20
    }
});

export default OrderListItem