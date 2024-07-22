import { StyleSheet ,Dimensions} from "react-native";

const {width} = Dimensions.get('window');

export default StyleSheet.create({
    container:{
        padding:10,
        margin:10,
        backgroundColor: "#C90035",
        borderRadius:5,
        alignItems: "center",
        width: width*0.45,
        justifyContent:"space-evenly",  //Burası biraz ayrık oldu ama artık gücüm kalmadı 
        flexDirection:"row",
    },
    title:{
        fontWeight:"bold",
        fontSize:15,
        color: "white"
    },
});