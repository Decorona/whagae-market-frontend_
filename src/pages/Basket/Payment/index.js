import * as React from "react";
import {
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import {
  Header,
  PaymentVisit,
  PaymentDelivery,
  ShortButton2,
  LongBottomButton,
} from "@components/index";
import { useSelector, useDispatch } from "react-redux";
import { fonts, colors } from "@constants/index";
import { CheckBox, PaymentTextinput } from "@components/index";
import { getHeight, getWidth } from "@utils/helper";
import { paymentMarketInfo } from "@actions/user";
import { URL_GET_MARKET_INFO } from "@constants/api";
import axios from "axios";
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
  PaymentMethodContainer: {
    paddingTop: 18,
    paddingHorizontal: 15,
    paddingBottom: 24,
    borderBottomColor: colors.greye3,
    borderBottomWidth: 8,
  },
  PaymentMethodTitleText: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 29,
    letterSpacing: -1.5,
    fontFamily: fonts.Medium,
    color: colors.grey3c,
  },
  PaymentMethodBox: {
    borderRadius: 8,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: colors.yellow129,
    paddingVertical: 14,
    paddingLeft: 8,
    paddingRight: 10,
    marginTop: 14,
    flexDirection: "row",
  },
  PaymentMethodText: {
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -1.05,
    fontFamily: fonts.Medium,
    color: colors.grey89,
  },
  PaymentMethodShortButton: {
    width: getWidth(56),
    height: getHeight(24),
  },
  PaymentPriceContainer: {
    paddingVertical: 19,
    paddingLeft: 15,
    paddingRight: 17,
    paddingBottom: 75,
  },
  PaymentPriceTitleText: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 29,
    letterSpacing: -1.5,
    fontFamily: fonts.Medium,
    color: colors.grey3c,
    marginBottom: 10,
  },
  PaymentPriceText: {
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -1.05,
    fontFamily: fonts.Medium,
    color: colors.grey6f,
    marginTop: 4,
  },
  PaymentPriceTextContainer: {
    flexDirection: "row",
  },
  PaymentPriceGrayBar: {
    height: 1,
    width: getWidth(333),
    backgroundColor: colors.greye3,
    marginTop: 14.4,
  },
  PaymentTotalPriceText: {
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -1.05,
    fontFamily: fonts.Medium,
    color: colors.grey3c,
  },
  PaymentTotalPriceContainer: {
    flexDirection: "row",
    marginTop: 9.6,
  },
});

const Payment = ({ route }) => {
  const { MarketId, items } = route.params;
  const [takeItemOption, setTakeItemOption] = React.useState(true);
  const dispatch = useDispatch();
  const _getMarketInfo = async () => {
    try {
      const res = await axios.get(URL_GET_MARKET_INFO(MarketId));
      if (res.status === 200) {
        dispatch(paymentMarketInfo(res.data));
      }
    } catch (error) {
      console.log(error);
      console.error(error);
    }
  };
  React.useEffect(() => {
    _getMarketInfo(MarketId);
  }, []);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={{ flex: 1 }}>
        <Header>결제하기</Header>
        <ScrollView style={styles.PaymentContainer}>
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
          <View style={styles.PaymentMethodContainer}>
            <Text style={styles.PaymentMethodTitleText}>결제수단</Text>
            <View style={styles.PaymentMethodBox}>
              <Text style={styles.PaymentMethodText}>화개캐쉬</Text>
              <View style={styles.PaymentEmpty}></View>
              <ShortButton2 style={styles.PaymentMethodShortButton}>
                변경
              </ShortButton2>
            </View>
          </View>
          <View style={styles.PaymentPriceContainer}>
            <Text style={styles.PaymentPriceTitleText}>결제금액</Text>
            <View style={styles.PaymentPriceTextContainer}>
              <Text style={styles.PaymentPriceText}>주문금액</Text>
              <View style={styles.PaymentEmpty}></View>
              <Text style={styles.PaymentPriceText}>0000원</Text>
            </View>
            <View style={styles.PaymentPriceTextContainer}>
              <Text style={styles.PaymentPriceText}>배달료</Text>
              <View style={styles.PaymentEmpty}></View>
              <Text style={styles.PaymentPriceText}>0000원</Text>
            </View>
            <View style={styles.PaymentPriceTextContainer}>
              <Text style={styles.PaymentPriceText}>화개 멤버십 할인</Text>
              <View style={styles.PaymentEmpty}></View>
              <Text style={styles.PaymentPriceText}>0000원</Text>
            </View>
            <View style={styles.PaymentPriceGrayBar}></View>

            <View style={styles.PaymentTotalPriceContainer}>
              <Text style={styles.PaymentTotalPriceText}>총 결제금액</Text>
              <View style={styles.PaymentEmpty}></View>
              <Text style={styles.PaymentTotalPriceText}>0000원</Text>
            </View>
          </View>
        </ScrollView>
        <LongBottomButton>0000원 결제하기</LongBottomButton>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Payment;
