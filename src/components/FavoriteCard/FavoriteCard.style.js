import { StyleSheet, Dimensions } from "react-native";

const wDimensions = Dimensions.get("window");

export default StyleSheet.create({
    container:{
        backgroundColor:"lightblue",
    },
    sum_container:{

        padding: 16,
        margin: 8,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 2, // Android için gölge
        shadowColor: '#000', // iOS için gölge
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    sum_title:{
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        color:"#2B615A",
    },
    sum_info:{
        fontSize: 15,
        color:"black",
        flexDirection:"row",
    },
    body_container:{
        padding:10,
        backgroundColor:"white",
        borderColor:"lightgrey",
        borderWidth:1,
        borderRadius:10,
    },
    title:{
        fontSize: 20 , 
        fontWeight:"600", 
        textAlign:"center", 
        color:"#2B615A",
    },
    button:{
        flexDirection:"row",
        width: '100%',
        justifyContent:"center",
    },
});
