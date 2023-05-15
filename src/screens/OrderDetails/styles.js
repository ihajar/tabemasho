import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    mainPage: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
       
    },
    page: {
        flex: 1,
        backgroundColor: "#314933",
        paddingBottom: 45,
        // padding: 10,
    },
    image: {
        width: "100%",
        aspectRatio: 5 / 3,
        opacity: 0.5,
    },
    iconContainer: {
        position: "absolute",
        left: 10,
        top: 40,
    },
    container: {
        marginTop: 150,
        position: "absolute",
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        padding: 20,
        flex: "col",
        
    }, 

    RestoContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: 'nowrap',
        paddingTop: 10,
    },
    ratingContainer: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '15%',
        backgroundColor: '#FFEFEB',
        borderRadius: 15,
        paddingVertical: 3,
    },
    rating: {
        fontSize: 15,
    },
    
    infoContainer: {
        display: "flex",
        flexDirection: "column",
        width: "80%",
        paddingLeft: 10,
        justifyContent: "center",
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        marginVertical: 5,
        textAlign: 'left',
    },
    subtitle: {
        color: "grey",
        fontSize: 15,
        textAlign: 'left',
    }, 
    menuContainer: {
        backgroundColor: '#191A24',
        width: '30%',
        marginBottom: 10,
        marginTop: 5,
        borderRadius: 10,
        alignItems: 'center',
        marginLeft: 10,
        paddingVertical: 5,
        paddingHorizontal: 5,
    },
    menu: {
        fontSize: 15,
        letterSpacing: 0.7,
        color: 'white',
        fontWeight: 'bold',
    },
});