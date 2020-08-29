import * as React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { ShortButton2, PaymentTextinput } from "@components/index";
import { colors, fonts } from "@constants/index";
import { getWidth, getHeight } from "@utils/helper";
import { useSelector, useDispatch } from "react-redux";
const styles = StyleSheet.create({
  PaymentDeliveryContainer: {
    paddingTop: 8,
    paddingLeft: 15,
    paddingRight: 17,
    paddingBottom: 20,
  },
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
    marginTop: 14,
  },
  PaymentDeliveryPhoneNumContainer: {
    flexDirection: "row",
    marginTop: 24,
  },
  PaymentDeliveryEmpty: {
    flex: 1,
  },
  PaymentDeliveryEditPhoneNumButton: {
    width: 56,
    height: 24,
  },
  PaymentDeliveryPhoneNumText: {
    fontSize: 18,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 27,
    letterSpacing: -1.35,
    fontFamily: fonts.Medium,
    color: colors.grey6f,
  },
});

const PaymentDelivery = ({ detailAddress, setDetailAddress }) => {
  const user = useSelector((state) => state.user);
  return (
    <View style={styles.PaymentDeliveryContainer}>
      <Text style={styles.PaymentDeliveryAddressText}>{user.location.key}</Text>
      <PaymentTextinput
        style={styles.PaymentDeliveryTextInput}
        placeholder={"상세 주소를 입력해주세요."}
        value={detailAddress}
        onChangeText={(text) => {
          setDetailAddress(text);
        }}
      />
      <View style={styles.PaymentDeliveryPhoneNumContainer}>
        <Text style={styles.PaymentDeliveryPhoneNumText}>{user.phoneNum}</Text>
        <View style={styles.PaymentDeliveryEmpty}></View>
        {/* <ShortButton2 style={styles.PaymentDeliveryEditPhoneNumButton}>
          변경
        </ShortButton2> */}
      </View>
    </View>
  );
};

export default PaymentDelivery;
