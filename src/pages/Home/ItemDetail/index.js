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
import {
  URL_GET_ITEM_DETAIL,
  URL_POST_ADD_ITEM_TO_BASKET,
} from "../../../constants/api";
import { itemDetailUpdate } from "../../../actions/appStatus";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const styles = StyleSheet.create({
  ItemDetailContainer: {
    flex: 1,
  },
  ItemDetailGobackContainer: {
    height: getHeight(61),
    backgroundColor: colors.yellow,
    flexDirection: "row",
    alignItems: "center",
  },
  ItemDetailGobackButtonContainer: {
    marginLeft: 16,
  },
  ItemDetailGobackButton: {
    width: 14,
    height: 23.3,
  },
  ItemDetailProductNameText1: {
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -0.28,
    fontFamily: fonts.Medium,
    color: colors.whitebox,
    marginLeft: 21,
  },
  ItemDetailScrollViewContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  ItemDetailInfoContainer1: {
    paddingBottom: 20.4,

    borderBottomColor: colors.greya5,
    borderBottomWidth: 6,
  },
  ItemDetailImage1: {
    width: getWidth(375),
    height: getHeight(375),
    backgroundColor: "red",
  },
  ItemDetailTextInfo: {
    paddingTop: 10,
    paddingLeft: 14,
  },
  ItemDetailNameText: {
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 36,
    letterSpacing: -1.8,
    fontFamily: fonts.Medium,
    color: colors.textblack,
  },
  ItemDetailProductInfoText: {
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: -0.9,
    fontFamily: fonts.Medium,
    color: colors.grey6f,
  },
  ItemDetailPriceText: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 36,
    letterSpacing: -1.8,
    fontFamily: fonts.Medium,
    color: colors.textblack,
    marginTop: 18,
  },
  ItemDetailMembershipContainer: {
    flexDirection: "row",
  },
  ItemDetailMembershipCard: {
    width: 60,
    height: 22,
    borderRadius: 4,
    backgroundColor: colors.yellow,
    justifyContent: "center",
  },
  ItemDetailMembershipCardText: {
    fontSize: 10,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 15,
    letterSpacing: -0.75,
    fontFamily: fonts.Medium,
    color: colors.white,
    alignSelf: "center",
  },
  ItemDetailMembershipText: {
    fontSize: 10,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 15,
    letterSpacing: -0.75,
    fontFamily: fonts.Medium,
    color: colors.grey89,
    alignSelf: "center",
    marginLeft: 6,
  },
  ItemDetailInfoContainer2: {
    paddingTop: 35,
    paddingLeft: 16,
    paddingBottom: 21,
    borderBottomWidth: 6,
    borderBottomColor: colors.greya5,
  },
  ItemDetailSaleUnitContainer: { flexDirection: "row" },
  ItemDetailSaleUnitText1: {
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 18,
    letterSpacing: -0.9,
    fontFamily: fonts.Medium,
    color: colors.grey89,
  },
  ItemDetailSaleUnitText2: {
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 18,
    letterSpacing: -0.9,
    fontFamily: fonts.Medium,
    color: colors.grey89,
    marginLeft: 20,
  },
  ItemDetailWeightContainer: { flexDirection: "row" },
  ItemDetailWeightText1: {
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 18,
    letterSpacing: -0.9,
    fontFamily: fonts.Medium,
    color: colors.grey89,
  },
  ItemDetailWeightText2: {
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 18,
    letterSpacing: -0.9,
    fontFamily: fonts.Medium,
    color: colors.grey89,
    marginLeft: 16,
  },
  ItemDetailNoticeContainer: { flexDirection: "row" },
  ItemDetailNoticeText1: {
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 18,
    letterSpacing: -0.9,
    fontFamily: fonts.Medium,
    color: colors.grey89,
  },
  ItemDetailNoticeText2: {
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 18,
    letterSpacing: -0.9,
    fontFamily: fonts.Medium,
    color: colors.grey89,
    marginLeft: 20,
  },
  ItemDetailInfoContainer3: {},
  ItemDetailImage2: {
    width: getWidth(375),
    height: getHeight(140),
    backgroundColor: "red",
  },
  ItemDetailSubTitle: {
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: -1.2,
    fontFamily: fonts.Medium,
    color: colors.grey89,
    alignSelf: "center",
    marginTop: 24,
  },
  ItemDetailProductNameText2: {
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 36,
    letterSpacing: -1.8,
    fontFamily: fonts.Medium,
    color: colors.black65,
    alignSelf: "center",
  },
  ItemDetailBar: {
    height: 1,
    width: getWidth(375) - 30,
    alignSelf: "center",
    backgroundColor: colors.grey89,
    marginTop: 16.4,
  },
  ItemDetailDescriptionContainer: {
    paddingHorizontal: 16,
    paddingTop: 32.6,
    paddingBottom: 84,
  },
  ItemDetailDescriptionText: {
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -1.05,
    color: colors.grey89,
  },
  ItemDetailSelectTabContainer: {
    flexDirection: "row",
  },
  ItemDetailOrderTabInactive: {
    width: getWidth(187.5),
    height: getHeight(35),
    backgroundColor: colors.greyeb,
    justifyContent: "center",
  },
  ItemDetailOrderTabActive: {
    width: getWidth(187.5),
    height: getHeight(35),
    backgroundColor: colors.white,
    justifyContent: "center",
  },
  ItemDetailInfoTabInactive: {
    width: getWidth(187.5),
    height: getHeight(35),
    backgroundColor: colors.greyeb,
    justifyContent: "center",
  },
  ItemDetailInfoTabActive: {
    width: getWidth(187.5),
    height: getHeight(35),
    backgroundColor: colors.white,
    justifyContent: "center",
  },
  ItemDetailInfoTabText: {
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: -1.2,
    fontFamily: fonts.Medium,
    color: colors.black76,
    alignSelf: "center",
  },
  ItemDetailOrderTabText: {
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: -1.2,
    fontFamily: fonts.Medium,
    color: colors.black76,
    alignSelf: "center",
  },
  ItemDetailOrderAmountContainer: {
    flexDirection: "row",
    paddingTop: 35,
    paddingBottom: 98,
    paddingHorizontal: 17,
  },
  ItemDetailOrderAmountCounter: {
    flexDirection: "row",
  },
  ItemDetailOrderAmountText: {
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: -1.2,
    fontFamily: fonts.Medium,
    color: colors.textblack,
  },
  ItemDetailOrderAmountCounterPlusButtonIcon: {
    width: 24,
    height: 24,
    borderRadius: 4,
    backgroundColor: "red",
  },
  ItemDetailOrderAmountCounterMinusButtonIcon: {
    width: 24,
    height: 24,
    borderRadius: 4,
    backgroundColor: "red",
  },
  ItemDetailOrderAmountCounterText: {
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: -1.2,
    fontFamily: fonts.Medium,
    color: colors.grey89,
  },
  ItemDetailEmpty: {
    flex: 1,
  },
  itemAmountArea: {
    width: 20,
    textAlign: "center",
    borderWidth: 0.2,
    borderColor: colors.yellow,
    fontWeight: "bold",
  },
});

const ItemDetail = ({ route }) => {
  const navigation = useNavigation();
  const { id } = route.params;
  const dispatch = useDispatch();
  const appStatus = useSelector((state) => state.appStatus);
  const user = useSelector((state) => state.user);
  const [tabJudge, setTabJudge] = React.useState(true);
  const [itemAmount, setItemAmount] = React.useState(1);
  const [itemTotalPrice, setItemTotalPrice] = React.useState(1);
  const _addToCart = async () => {
    try {
      const body = {
        userId: user.userId,
        marketId: appStatus.itemDetail.MarketId,
        totalPayment: itemTotalPrice,
        goodsId: appStatus.itemDetail.id,
      };
      const res = await axios.post(URL_POST_ADD_ITEM_TO_BASKET, body, {});

      if (res.status === 200) {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
      console.error(error);
    }
  };
  const [orderInfo, setOrderInfo] = React.useState([
    {
      categoryName: "옵션 카테고리1",
      options: [
        { name: "추가옵션 이름1", price: 2000, check: false },
        { name: "추가옵션 이름2", price: 2000, check: false },
        { name: "추가옵션 이름3", price: 2000, check: false },
        { name: "추가옵션 이름4", price: 2000, check: false },
      ],
    },
    {
      categoryName: "옵션 카테고리2",
      options: [
        { name: "추가옵션 이름1", price: 2000, check: false },
        { name: "추가옵션 이름2", price: 2000, check: false },
        { name: "추가옵션 이름3", price: 2000, check: false },
        { name: "추가옵션 이름4", price: 2000, check: false },
      ],
    },
  ]);

  const _getItemDetail = async (id) => {
    try {
      const res = await axios.get(URL_GET_ITEM_DETAIL(id), {});
      if (res.status === 200) {
        dispatch(itemDetailUpdate(res.data));
        setItemTotalPrice(res.data.price);
      }
    } catch (error) {
      console.log(error);
      console.error(error);
    }
  };
  React.useEffect(() => {
    _getItemDetail(id);
  }, []);
  return (
    <View style={styles.ItemDetailContainer}>
      <View style={styles.ItemDetailGobackContainer}>
        <TouchableOpacity
          style={styles.ItemDetailGobackButtonContainer}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={icons.leftArrowWhite}
            style={styles.ItemDetailGobackButton}
          />
        </TouchableOpacity>
        <Text style={styles.ItemDetailProductNameText1}>
          {appStatus.itemDetail.goodsName}
        </Text>
      </View>
      <ScrollView style={styles.ItemDetailScrollViewContainer}>
        <View style={styles.ItemDetailInfoContainer1}>
          <View style={styles.ItemDetailImage1}></View>
          <View style={styles.ItemDetailTextInfo}>
            <Text style={styles.ItemDetailNameText}>
              {appStatus.itemDetail.goodsName}
            </Text>
            <Text style={styles.ItemDetailProductInfoText}>
              {appStatus.itemDetail.description}
            </Text>
            <Text style={styles.ItemDetailPriceText}>
              {appStatus.itemDetail.price}원
            </Text>
            <View style={styles.ItemDetailMembershipContainer}>
              <View style={styles.ItemDetailMembershipCard}>
                <Text style={styles.ItemDetailMembershipCardText}>
                  화개멤버 3%
                </Text>
              </View>
              <Text style={styles.ItemDetailMembershipText}>
                개당 00포인트 적립
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.ItemDetailSelectTabContainer}>
          <TouchableOpacity
            style={[
              tabJudge == true
                ? styles.ItemDetailOrderTabActive
                : styles.ItemDetailOrderTabInactive,
            ]}
            onPress={() => {
              setTabJudge(true);
            }}
          >
            <Text style={styles.ItemDetailOrderTabText}>주문</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              tabJudge == true
                ? styles.ItemDetailInfoTabInactive
                : styles.ItemDetailInfoTabActive,
            ]}
            onPress={() => {
              setTabJudge(false);
            }}
          >
            <Text style={styles.ItemDetailInfoTabText}>상세정보</Text>
          </TouchableOpacity>
        </View>
        {tabJudge ? (
          <View></View>
        ) : (
          <>
            <View style={styles.ItemDetailInfoContainer2}>
              <View style={styles.ItemDetailSaleUnitContainer}>
                <Text style={styles.ItemDetailSaleUnitText1}>판매단위</Text>
                <Text style={styles.ItemDetailSaleUnitText2}>1개</Text>
              </View>
              <View style={styles.ItemDetailWeightContainer}>
                <Text style={styles.ItemDetailWeightText1}>중량/용량</Text>
                <Text style={styles.ItemDetailWeightText2}>20g</Text>
              </View>
              <View style={styles.ItemDetailNoticeContainer}>
                <Text style={styles.ItemDetailNoticeText1}>안내사항</Text>
                <Text style={styles.ItemDetailNoticeText2}>
                  코로나 조심하세요 ㅎ
                </Text>
              </View>
            </View>
            <View style={styles.ItemDetailInfoContainer3}>
              <View style={styles.ItemDetailImage2}></View>
              <Text style={styles.ItemDetailSubTitle}>SUB TITLE</Text>
              <Text style={styles.ItemDetailProductNameText2}>
                {appStatus.itemDetail.goodsName}
              </Text>
            </View>
            <View style={styles.ItemDetailBar}></View>
            <View style={styles.ItemDetailDescriptionContainer}>
              <Text style={styles.ItemDetailDescriptionText}>
                {appStatus.itemDetail.description}
              </Text>
            </View>
          </>
        )}
        {tabJudge && (
          <View style={styles.ItemDetailOrderAmountContainer}>
            <Text style={styles.ItemDetailOrderAmountText}>수량</Text>
            <View style={styles.ItemDetailEmpty}></View>
            <View style={styles.ItemDetailOrderAmountCounter}>
              <TouchableOpacity
                onPress={() => {
                  if (itemAmount > 1) {
                    let updatedAmount = itemAmount - 1;
                    let updatedPrice =
                      itemTotalPrice - appStatus.itemDetail.price;
                    setItemAmount(updatedAmount);
                    setItemTotalPrice(updatedPrice);
                  }
                }}
              >
                <Image
                  source={icons.minusButton}
                  style={styles.ItemDetailOrderAmountCounterMinusButtonIcon}
                />
              </TouchableOpacity>
              <Text style={styles.itemAmountArea}>{itemAmount}</Text>
              <TouchableOpacity
                onPress={() => {
                  let updatedAmount = itemAmount + 1;
                  let updatedPrice =
                    itemTotalPrice + appStatus.itemDetail.price;
                  setItemAmount(updatedAmount);
                  setItemTotalPrice(updatedPrice);
                }}
              >
                <Image
                  source={icons.plusButton}
                  style={styles.ItemDetailOrderAmountCounterPlusButtonIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
      <LongBottomButton price={itemTotalPrice} onPress={() => _addToCart()}>
        {itemAmount}개 담기
      </LongBottomButton>
    </View>
  );
};

export default ItemDetail;
