import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { colors, fonts } from "../../../constants";
import { getHeight, getWidth } from "../../../utils/helper";
import { icons } from "../../../assets";
import { useNavigation } from "@react-navigation/native";
import { LongBottomButton, OrderTab } from "../../../components";
const styles = StyleSheet.create({
  PaymentPageContainer: {
    flex: 1,
  },
  PaymentPageGobackContainer: {
    height: getHeight(61),
    backgroundColor: colors.yellow,
    flexDirection: "row",
    alignItems: "center",
  },
  PaymentPageGobackButtonContainer: {
    marginLeft: 16,
  },
  PaymentPageGobackButton: {
    width: 14,
    height: 23.3,
  },
  PaymentPageProductNameText1: {
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -0.28,
    fontFamily: fonts.Medium,
    color: colors.whitebox,
    marginLeft: 21,
  },
  PaymentPageOrderInfo: {
    width: getWidth(375),
    height: getHeight(195),
    marginBottom: 15,
    backgroundColor: colors.whitebox,
    padding: 20,
  },
  PaymentMethod: {
    width: getWidth(375),
    height: getHeight(155),
    marginBottom: 5,
    backgroundColor: colors.whitebox,
    padding: 20,
  },
  PaymentPageOrderInfoTextArea: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  PaymentPageOrderInfoText: {
    width: getWidth(79),
    height: getHeight(29),
    fontFamily: fonts.Medium,
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 29,
    letterSpacing: -1.5,
    color: colors.textblack,
  },
  PaymentPageCheckBoxOptionArea: {
    flexDirection: "row",
  },
  PaymentPageBrandNameTextArea: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  PaymentPageBrandNameText: {
    width: getWidth(117),
    height: getHeight(29),
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 29,
    letterSpacing: -1.5,
    color: colors.textblack,
  },
  PaymentPageAdressArea: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  PaymentPageAdress: {
    width: getWidth(218),
    height: getHeight(27),
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 27,
    letterSpacing: -1.35,
    color: colors.textblack,
  },
  PaymentPageAdressCopy: {
    width: getWidth(76),
    height: getHeight(24),
    borderRadius: 4,
    backgroundColor: colors.yellow,
  },
  PaymentPageChange: {
    width: getWidth(56),
    height: getHeight(24),
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: colors.yellow,
  },
  PaymentPagePhoneNumberChange: {
    width: getWidth(76),
    height: getHeight(24),
    borderRadius: 4,
    backgroundColor: colors.yellow,
    alignItems: "center",
  },
  PaymentPageAdressCopyText: {
    width: getWidth(74),
    height: getHeight(18),
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: -0.9,
    textAlign: "center",
    color: colors.whitebox,
  },
  PaymentPagePhoneNumberChangeText: {
    color: colors.whitebox,
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: -0.9,
  },
  PaymentPageAdressTextArea: {},
  PaymentPageAdressText: {
    width: getWidth(114),
    height: getHeight(18),
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: -0.9,
    color: colors.grey8d,
  },
  PaymentPagePhoneNumberArea: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  PaymentPagePhoneNumber: {
    width: getWidth(120),
    height: getHeight(27),
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 27,
    letterSpacing: -1.35,
    color: colors.grey6f,
  },
  PaymentPageCheckBoxOption: {
    width: 16,
    height: 16,
  },
  PaymentPageCheckBoxOptionText: {
    width: getWidth(85),
    height: getHeight(20),
    marginLeft: 5,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -1.05,
    color: colors.grey6f,
  },
  PaymentPageRequireTextArea: {
    marginTop: 10,
    marginBottom: 10,
    width: getWidth(342),
    height: getHeight(48),
    borderRadius: 8,
    backgroundColor: colors.lightgrey2,
    justifyContent: "center",
  },
  PaymentPageRequireText: {
    width: getWidth(155),
    height: getHeight(20),
    fontWeight: "bold",
    fontFamily: fonts.Medium,
    marginLeft: 5,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -1.05,
    color: colors.grey89,
  },
  optionCheckedBoxArea: {
    flexDirection: "row",
  },
  PaymentMethodArea: {
    width: getWidth(342),
    height: getHeight(48),
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginTop: 15,
    borderWidth: 1,
    borderColor: colors.yellow,
  },
  PaymentMethodTextArea: {
    width: getWidth(58),
    height: getHeight(20),
    fontWeight: "bold",
    fontFamily: fonts.Medium,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -1.05,
    color: colors.grey89,
  },
  PaymentPageCheckBoxOptionEach: {
    flexDirection: "row",
    width: 30,
    margin: 8,
    alignItems: "center",
  },
  PaymentPageAmountArea: {
    marginTop: 15,
  },
  PaymentPageAmount: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  HorizontalArea: {
    margin: 5,
    borderBottomWidth: 1,
    borderColor: colors.greyef,
  },
  PaymentPageScrollViewContainer: {
    backgroundColor: colors.white,
  },
  PaymentPageAdressTextAreaTab: {
    width: getWidth(218),
    height: getHeight(27),
    fontWeight: "bold",
    fontFamily: fonts.Medium,
    fontSize: 18,
    lineHeight: 27,
    letterSpacing: -1.35,
    color: colors.gray3,
  },
});

const PaymentPage = () => {
  const navigation = useNavigation();
  const [itemAmount, setItemAmount] = React.useState(1);
  const [itemTotalPrice, setItemTotalPrice] = React.useState(1);
  const [tabJudge, setTabJudge] = React.useState(true);
  return (
    <View style={styles.PaymentPageContainer}>
      <View style={styles.PaymentPageGobackContainer}>
        <TouchableOpacity
          style={styles.PaymentPageGobackButtonContainer}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={icons.leftArrowWhite}
            style={styles.PaymentPageGobackButton}
          />
        </TouchableOpacity>
        <Text style={styles.PaymentPageProductNameText1}>결제하기</Text>
      </View>
      <ScrollView style={styles.PaymentPageScrollViewContainer}>
        <View style={styles.PaymentPageOrderInfo}>
          <View style={styles.PaymentPageOrderInfoTextArea}>
            <Text style={styles.PaymentPageOrderInfoText}>주문정보</Text>
            <View style={styles.PaymentPageCheckBoxOptionArea}>
              {tabJudge ? (
                <>
                  <View style={styles.PaymentPageCheckBoxOptionEach}>
                    <TouchableOpacity
                      onPress={() => {
                        setTabJudge(true);
                      }}
                    >
                      <Image
                        source={icons.optionCheckedBox}
                        style={styles.PaymentPageCheckBoxOption}
                      ></Image>
                    </TouchableOpacity>
                    <Text style={styles.PaymentPageCheckBoxOptionText}>
                      방문
                    </Text>
                  </View>

                  <View style={styles.PaymentPageCheckBoxOptionEach}>
                    <TouchableOpacity
                      onPress={() => {
                        setTabJudge(false);
                      }}
                    >
                      <Image
                        source={icons.optionCheckBox}
                        style={styles.PaymentPageCheckBoxOption}
                      ></Image>
                    </TouchableOpacity>
                    <Text style={styles.PaymentPageCheckBoxOptionText}>
                      배송
                    </Text>
                  </View>
                </>
              ) : (
                <>
                  <View style={styles.PaymentPageCheckBoxOptionEach}>
                    <TouchableOpacity
                      onPress={() => {
                        setTabJudge(true);
                      }}
                    >
                      <Image
                        source={icons.optionCheckBox}
                        style={styles.PaymentPageCheckBoxOption}
                      ></Image>
                    </TouchableOpacity>
                    <Text style={styles.PaymentPageCheckBoxOptionText}>
                      방문
                    </Text>
                  </View>

                  <View style={styles.PaymentPageCheckBoxOptionEach}>
                    <TouchableOpacity
                      onPress={() => {
                        setTabJudge(false);
                      }}
                    >
                      <Image
                        source={icons.optionCheckedBox}
                        style={styles.PaymentPageCheckBoxOption}
                      ></Image>
                    </TouchableOpacity>
                    <Text style={styles.PaymentPageCheckBoxOptionText}>
                      배송
                    </Text>
                  </View>
                </>
              )}
            </View>
          </View>
          {tabJudge ? (
            <>
              <Text style={styles.PaymentPageAdressTextAreaTab}>
                서울특별시 성북구 삼선동27가
              </Text>
              <View style={styles.PaymentPageAdressTextArea}>
                <Text style={styles.PaymentPageAdressText}>
                  [도로명] 삼선교로 276길
                </Text>
              </View>
              <View style={styles.PaymentPageRequireTextArea}>
                <Text style={styles.PaymentPageRequireText}>
                  상세 주소를 입력해주세요.
                </Text>
              </View>
            </>
          ) : (
            <>
              <View style={styles.PaymentPageBrandNameTextArea}>
                <Text style={styles.PaymentPageBrandNameText}>BRAND NAME</Text>
              </View>
              <View style={styles.PaymentPageAdressArea}>
                <Text style={styles.PaymentPageAdress}>
                  서울특별시 성북구 삼선동27가
                </Text>
                <TouchableOpacity>
                  <View style={styles.PaymentPageAdressCopy}>
                    <Text style={styles.PaymentPageAdressCopyText}>
                      거래주소 복사
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.PaymentPageAdressTextArea}>
                <Text style={styles.PaymentPageAdressText}>
                  [도로명] 삼선교로 276길
                </Text>
              </View>
            </>
          )}
          <View style={styles.PaymentPagePhoneNumberArea}>
            <Text style={styles.PaymentPagePhoneNumber}>010-6768-7150</Text>
            <TouchableOpacity>
              <View style={styles.PaymentPageChange}>
                <Text style={styles.PaymentPagePhoneNumberChangeText}>
                  변경
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.PaymentPageOrderInfo}>
          <Text style={styles.PaymentPageOrderInfoText}>요청사항</Text>
          <View style={styles.PaymentPageRequireTextArea}>
            <Text style={styles.PaymentPageRequireText}>
              예)천천히 와주세요.
            </Text>
          </View>
          <View style={styles.optionCheckedBoxArea}>
            <Image
              source={icons.optionCheckedBox}
              style={styles.PaymentPageCheckBoxOption}
            ></Image>
            <Text style={styles.PaymentPageCheckBoxOptionText}>
              다음에도 사용
            </Text>
          </View>
        </View>
        <View style={styles.PaymentMethod}>
          <Text style={styles.PaymentPageOrderInfoText}>결제수단</Text>
          <View style={styles.PaymentMethodArea}>
            <Text style={styles.PaymentMethodTextArea}>화개캐쉬</Text>
            <View style={styles.PaymentPageChange}>
              <Text style={styles.PaymentPagePhoneNumberChangeText}>변경</Text>
            </View>
          </View>
        </View>
        <View style={styles.PaymentPageOrderInfo}>
          <View>
            <Text style={styles.PaymentPageOrderInfoText}>결제금액</Text>
          </View>
          <View style={styles.PaymentPageAmountArea}>
            <View style={styles.PaymentPageAmount}>
              <Text>주문금액</Text>
              <Text>+184,000원</Text>
            </View>
            <View style={styles.PaymentPageAmount}>
              <Text>배달료</Text>
              <Text>+15,000원</Text>
            </View>
            <View style={styles.PaymentPageAmount}>
              <Text>화개 멤버십 할인</Text>
              <Text>-5,000원</Text>
            </View>
            <View style={styles.HorizontalArea} />
            <View style={styles.PaymentPageAmount}>
              <Text>총 결제금액</Text>
              <Text>+184,000원</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <LongBottomButton price={itemTotalPrice}>
        {itemAmount}개 담기
      </LongBottomButton>
    </View>
  );
};

export default PaymentPage;
