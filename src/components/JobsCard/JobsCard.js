import React from "react";
import {View, Text, Image, TouchableWithoutFeedback} from "react-native";

import styles from "./JobsCard.style";

const JobsCard = ({item, onSelect}) => {
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Text style={styles.name}>{item.name}</Text>
                <View style={styles.location_container}>
                    <Text style={styles.location}>{item.locations[0]?.name}</Text>
                </View>
                <Text style={styles.level_info}>{item.levels[0]?.name}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default JobsCard;
