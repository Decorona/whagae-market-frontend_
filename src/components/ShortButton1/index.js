import * as React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { fonts, colors } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  ShortButton1Container: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: colors.black70,
    borderRadius: 8,
    justifyContent: "center",
  },
  ShortButton1Text: {
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -1.05,
    fontFamily: fonts.Medium,
    color: colors.grey89,
    alignSelf: "center",
  },
});

const ShortButton1 = ({ containerStyle, children, onPress }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.ShortButton1Container, containerStyle]}
      onPress={onPress}
    >
      <Text style={styles.ShortButton1Text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default ShortButton1;
