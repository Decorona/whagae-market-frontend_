import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ShortButton1, ShortButton2 } from "@components/index";
import { fonts, colors } from "@constants/index";
import { URL_GET_MARKET_INFO } from "@constants/api";
import axios from "axios";
const styles = StyleSheet.create({
  PaymentVisitContainer: {
    paddingTop: 8,
    paddingLeft: 15,
    paddingRight: 17,
    paddingBottom: 20,
  },
  PaymentVisitNameText: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 29,
    letterSpacing: -1.5,
    fontFamily: fonts.Medium,
    color: colors.gray3,
  },
  PaymentVisitAddressText: {
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 27,
    letterSpacing: -1.35,
    fontFamily: fonts.Medium,
    color: colors.gray3,
  },
  PaymentVisitPhoneNumText: {
    fontSize: 18,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 27,
    letterSpacing: -1.35,
    fontFamily: fonts.Medium,
    color: colors.gray6,
  },
  PaymentVisitAddressContainer: {
    flexDirection: "row",
  },
  PaymentVisitPhoneNumContainer: {
    marginTop: 19,
    flexDirection: "row",
  },
  PaymentVisitAddressCopyButton: {
    width: 76,
    height: 24,
  },
  PaymentVisitPhoneNumEditButton: {
    width: 56,
    height: 24,
  },
  PaymentVisitEmpty: {
    flex: 1,
  },
});

const PaymentVisit = ({ MarketId }) => {
  const [marketInfo, setMarketInfo] = React.useState([]);
  const _getMarketInfo = async () => {
    try {
      const res = await axios.get(URL_GET_MARKET_INFO(MarketId));
      if (res.status === 200) {
        // console.log(res.data);
        setMarketInfo(res.data);
      }
    } catch (error) {}
  };
  React.useEffect(() => {
    _getMarketInfo(marketInfo);
  }, []);
  return (
    <View style={styles.PaymentVisitContainer}>
      <Text style={styles.PaymentVisitNameText}>{marketInfo.marketName}</Text>
      <View style={styles.PaymentVisitAddressContainer}>
        <Text style={styles.PaymentVisitAddressText}>
          {marketInfo.marketBusinessLocation}
        </Text>
        <View style={styles.PaymentVisitEmpty}></View>
        <ShortButton2 style={styles.PaymentVisitAddressCopyButton}>
          가게주소 복사
        </ShortButton2>
      </View>
      <View style={styles.PaymentVisitPhoneNumContainer}>
        <Text style={styles.PaymentVisitPhoneNumText}>
          {marketInfo.marketPhone}
        </Text>
        <View style={styles.PaymentVisitEmpty}></View>
        <ShortButton2 style={styles.PaymentVisitPhoneNumEditButton}>
          변경
        </ShortButton2>
      </View>
    </View>
  );
};

export default PaymentVisit;
