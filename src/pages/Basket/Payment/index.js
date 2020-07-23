import * as React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Header, PaymentVisit, PaymentDelivery } from "@components/index";
import { useSelector } from "react-redux";
import { fonts, colors } from "@constants/index";
import { CheckBox, PaymentTextinput } from "@components/index";
import { getHeight, getWidth } from "@utils/helper";
const styles = StyleSheet.create({
  PaymentContainer: {
    flex: 1,
  },
  PaymentOrderInfoContainer: {
    borderBottomColor: colors.greye3,
    borderBottomWidth: 8,
  },
  PaymentSelectBoxContainer: {
    flexDirection: "row",
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 17,
  },
  PaymentOrderInfoText: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 29,
    letterSpacing: -1.5,
    fontFamily: fonts.Medium,
    color: colors.grey3c,
  },
  PaymentEmpty: {
    flex: 1,
  },
  PaymentVisitText: {
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -1.05,
    fontFamily: fonts.Medium,
    color: colors.grey6f,
    marginLeft: 4,
  },
  PaymentDeliveryText: {
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -1.05,
    fontFamily: fonts.Medium,
    color: colors.grey6f,
    marginLeft: 4,
  },
  PaymentVisitDeliveryCheckBox: {
    marginLeft: 14,
  },
  PaymentAskContainer: {
    paddingTop: 18,
    paddingHorizontal: 15,
    paddingBottom: 38,
    borderBottomColor: colors.greye3,
    borderBottomWidth: 8,
  },
  PaymentTextinputAskContainer: {
    width: getWidth(342),
    height: getHeight(48),
    marginTop: 14,
  },
  PaymentAskText: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 29,
    letterSpacing: -1.5,
    fontFamily: fonts.Medium,
    color: colors.grey3c,
  },
});

const Payment = ({ route }) => {
  const { MarketId, items } = route.params;
  const [takeItemOption, setTakeItemOption] = React.useState(true);
  return (
    <View style={styles.PaymentContainer}>
      <Header>결제하기</Header>
      <View style={styles.PaymentOrderInfoContainer}>
        <View style={styles.PaymentSelectBoxContainer}>
          <Text style={styles.PaymentOrderInfoText}>주문정보</Text>
          <View style={styles.PaymentEmpty}></View>
          <CheckBox
            checkStatus={!takeItemOption}
            onPress={() => {
              setTakeItemOption(false);
            }}
          />
          <Text style={styles.PaymentVisitText}>방문</Text>
          <CheckBox
            checkStatus={takeItemOption}
            style={styles.PaymentVisitDeliveryCheckBox}
            onPress={() => {
              setTakeItemOption(true);
            }}
          />
          <Text style={styles.PaymentDeliveryText}>배송</Text>
        </View>
        {takeItemOption ? (
          <PaymentDelivery />
        ) : (
          <PaymentVisit MarketId={MarketId} />
        )}
      </View>
      <View style={styles.PaymentAskContainer}>
        <Text style={styles.PaymentAskText}>요청사항</Text>
        <PaymentTextinput
          style={styles.PaymentTextinputAskContainer}
          placeholder={"예) 천천히 와주세요."}
        />
      </View>
    </View>
  );
};

export default Payment;
