import React from "react";
import { Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import styles from "./Button.style";

const Button = ({ text, onPress, loading, iconName }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <>
          <MaterialIcons name={iconName} size={20} color="white" />
          <Text style={styles.title}>{text}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;
