import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import HTMLView from "react-native-htmlview";

import styles from "./DetailCard.style";
import Button from "../Button/Button";


const DetailCard = ({detail, onSelect}) => {
    return (
        <SafeAreaView>
            <View style={styles.sum_container}>
                <Text style={styles.sum_title}>{detail.name}</Text>
                <Text style={styles.sum_info}>
                    <Text style={{ color: "#C90035" }}>Location: </Text> {detail.locations[0]?.name}  {"\n"}
                    <Text style={{ color: "#C90035" }}>Level: </Text> {detail.levels[0]?.name}
                </Text>   
                <Text style={styles.title}> Job Detail </Text>
            </View>
            <View style={styles.body_container}>
                <HTMLView value={detail.contents}/>
            </View>
            <View style={styles.button}>
                <Button iconName="login" text={"Submit"} />
                <Button iconName="favorite" text={"Favorite Job"} onPress={onSelect}/>
            </View>
        </SafeAreaView>
    );
};

export default DetailCard;
/*
 
*/ 