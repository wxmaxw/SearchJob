import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:"lightblue",
    },
    sum_container:{
        backgroundColor:"FFEBEB",
        borderColor: "lightgrey",
        borderWidth:1,
        padding:5,
        borderRadius: 10,
        margin:2
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
        flex:1,
        alignSelf:"center",
        justifyContent:"space-between",
    
    
    },
});