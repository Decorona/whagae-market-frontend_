import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { icons } from "@assets/index";

const styles = StyleSheet.create({
  CheckBoxImage: {
    width: 20,
    height: 20,
  },
});

const CheckBox = ({ onPress, checkStatus, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      {checkStatus == false ? (
        <Image source={icons.optionCheckBox} style={styles.CheckBoxImage} />
      ) : (
        <Image source={icons.optionCheckedBox} style={styles.CheckBoxImage} />
      )}
    </TouchableOpacity>
  );
};

export default CheckBox;
