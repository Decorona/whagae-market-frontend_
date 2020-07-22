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
  ShortButton2Container: {
    backgroundColor: colors.yellow129,
    borderRadius: 8,
    justifyContent: "center",
  },
  ShortButton2Text: {
    fontSize: 12,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 18,
    letterSpacing: -0.9,
    color: colors.white8,
    fontFamily: fonts.Medium,
    alignSelf: "center",
  },
});

const ShortButton2 = ({ style, children, onPress }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.ShortButton2Container, style]}
      onPress={onPress}
    >
      <Text style={styles.ShortButton2Text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default ShortButton2;
