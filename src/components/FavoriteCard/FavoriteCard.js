import React from "react";
import { View, Text, SafeAreaView } from "react-native";


import styles from "./FavoriteCard.style";
import Button from "../Button/Button";


const FavoriteCard = ({item, onSelect}) => {
    return (
        <SafeAreaView>
            <View style={styles.sum_container}>
                <Text style={styles.sum_title}>{item.name}</Text>
                <Text style={styles.sum_info}>
                    <Text style={{ color: "#C90035" }}>Location: </Text> {item.locations[0]?.name}  {"\n"}
                    <Text style={{ color: "#C90035" , textAlign:""}}>Level: </Text> {item.levels[0]?.name}
                </Text>   
                <View style={styles.button}>
                    <Button iconName="delete-outline" text={"Remove"} onPress={onSelect}/>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default FavoriteCard;
 