import * as React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { ShortButton2, PaymentTextInput } from "@components/index";
import { colors, fonts } from "@constants/index";
import { getWidth, getHeight, height } from "@utils/helper";
const styles = StyleSheet.create({
  PaymentDeliveryContainer: {},
  PaymentDeliveryAddressText: {
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 27,
    letterSpacing: -1.35,
    fontFamily: fonts.Medium,
    color: colors.grey3,
  },
  PaymentDeliveryTextInput: {
    width: getWidth(342),
    height: getHeight(48),
  },
});

const PaymentDelivery = () => {
  return (
    <View style={styles.PaymentDeliveryContainer}>
      <Text style={styles.PaymentDeliveryAddressText}>
        서울특별시 성북구 삼성동
      </Text>
      <PaymentTextInput style={styles.PaymentDeliveryTextInput} />
      <View>
        <Text>010-0000-0000</Text>
        <ShortButton2>변경</ShortButton2>
      </View>
    </View>
  );
};

export default PaymentDelivery;
