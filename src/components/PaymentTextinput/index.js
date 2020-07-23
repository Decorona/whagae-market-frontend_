import * as React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { colors, fonts } from "@constants/index";

const styles = StyleSheet.create({
  PaymentTextInputContainer: {
    backgroundColor: colors.greye3,
    borderRadius: 8,
    alignSelf: "center",
  },
  PaymentTextInputTextInput: {
    marginLeft: 8,
  },
});

const PaymentTextinput = ({ style, placeholder }) => {
  return (
    <View style={[styles.PaymentTextInputContainer, style]}>
      <TextInput
        style={styles.PaymentTextInputTextInput}
        placeholder={placeholder}
      />
    </View>
  );
};

export default PaymentTextinput;
