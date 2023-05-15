import { View, Text, FlatList, StyleSheet } from 'react-native'
import OrderListItem from '../../components/OrderListItem'
import orders from '../../../assets/data/orders.json'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const OrderScreen = () => {
  return (
    <View style={styles.page}>
        <View  style={styles.listOrder}>
            <FlatList  
                data={orders}
                renderItem={({item}) => <OrderListItem order={item} />}
                numColumns={2}
            />
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: '100%',
        paddingTop: 50,
        backgroundColor: '#F3F3F7',
        alignItems: 'center'
    },
    listOrder: { 
        width: '100%',
        alignContent: 'center'
    }
});

export default OrderScreen