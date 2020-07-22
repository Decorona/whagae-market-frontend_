import * as React from "react";
import { View, StyleSheet } from "react-native";
import { colors, fonts } from "@constants/index";

const styles = StyleSheet.create({
  PaymentTextInputContainer: {
    backgroundColor: colors.greye3,
    borderRadius: 8,
    // alignSelf: "center",
  },
  PaymentTextInputTextInput: {
    marginLeft: 8,
  },
});

const PaymentTextInput = ({ style }) => {
  return (
    <View style={[styles.PaymentTextInputContainer, style]}>
      <TextInput style={styles.PaymentTextInputTextInput} />
    </View>
  );
};

export default PaymentTextInput;
