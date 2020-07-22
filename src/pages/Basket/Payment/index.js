import * as React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Header, PaymentVisit, PaymentDelivery } from "@components/index";
import { useSelector } from "react-redux";
const Styles = StyleSheet.create({
  PaymentContainer: {
    flex: 1,
  },
});

const Payment = ({ route }) => {
  const { MarketId, items } = route.params;
  console.log(items);
  return (
    <View style={Styles.PaymentContainer}>
      <Header>결제하기</Header>
      <View>
        <PaymentVisit MarketId={MarketId}></PaymentVisit>
        <PaymentDelivery></PaymentDelivery>
      </View>
    </View>
  );
};

export default Payment;
