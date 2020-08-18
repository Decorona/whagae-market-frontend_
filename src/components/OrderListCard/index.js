import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { colors, fonts } from "../../constants";
import { getHeight, getWidth } from "../../utils/helper";
import { useNavigation } from "@react-navigation/native";
import { icons } from "../../assets";
import { ShortButton1 } from "../../components";
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
  OrderListCardContainer: {
    width: getWidth(342),
    height: 88,
    paddingVertical: 16,
    borderRadius: 8,
    backgroundColor: colors.greyf8,
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 20,
  },
  OrderListCardIcon: {
    width: 56,
    height: 56,
    marginLeft: 10,
  },
  OrderListCardNameAndCategoryContainer: {
    marginLeft: 10,
  },
  OrderListCardNameText: {
    fontSize: 20,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 29,
    letterSpacing: -1.5,
    fontFamily: fonts.Medium,
    color: colors.textblack,
  },
  OrderListCardCategoryText: {
    fontSize: 20,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 29,
    letterSpacing: -1.5,
    fontFamily: fonts.Medium,
    color: colors.grey8d,
  },
  OrderListCardEmpty: {
    flex: 1,
  },
  OrderListCardFeeOptionContainer: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  OrderListCardFeeOptionText1: {
    fontSize: 10,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 12,
    letterSpacing: -0.6,
    fontFamily: fonts.Medium,
    color: colors.grey6f,
  },
  OrderListCardFeeOptionText2: {
    fontSize: 8,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 12,
    letterSpacing: -0.6,
    fontFamily: fonts.Medium,
    marginLeft: 1,
  },
  OrderListCardFeeText1: {
    fontSize: 20,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 29,
    letterSpacing: -1.5,
    fontFamily: fonts.Medium,
    color: colors.black6c,
  },
  OrderListCardFeeContainer: {
    flexDirection: "row",
  },
  OrderListCardAmountContainer: {
    flexDirection: "row",
    alignSelf: "flex-end",
    marginTop: 5,
  },
  OrderListCardAmountText: {
    fontSize: 12,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 18,
    letterSpacing: -0.9,
    fontFamily: fonts.Medium,
    color: colors.grey6f,
  },
  OrderListCardAmountIcon: {
    width: 10,
    height: 10,
    alignSelf: "center",
    marginLeft: 3,
  },
  OrderListCardFeeAndAmountContainer: {
    marginRight: 13,
    marginBottom: 20,
  },
  OrderListCardShortButton1: {
    width: 78,
    height: 30,
    marginTop: 5,
    alignSelf: "flex-end",
  },
});

const OrderListCard = ({ item }) => {
  const navigation = useNavigation();
  const user = useSelector((state) => state.user);
  console.log(item);
  const handleCategoryName = React.useCallback((categoryName) => {
    let category = "";
    switch (categoryName) {
      case "mart":
        category = "마트";
        break;
      case "hairshop":
        category = "미용실";
        break;
      case "nail_art":
        category = "네일아트";
        break;
      case "dress":
        category = "의류";
        break;
      case "glasses":
        category = "안경점";
        break;
      case "cleaning":
        category = "세탁소";
        break;
      case "flowershop":
        category = "꽃집";
        break;
    }
    return category;
  }, []);
  return (
    <View style={styles.OrderListCardContainer}>
      <Image
        style={styles.OrderListCardIcon}
        source={{ uri: item.ShoppingCart.Market.marketPhoto }}
      ></Image>
      <View style={styles.OrderListCardNameAndCategoryContainer}>
        <Text style={styles.OrderListCardNameText}>
          {item.ShoppingCart.Market.marketName}
        </Text>
        <Text style={styles.OrderListCardCategoryText}>
          {handleCategoryName(item.ShoppingCart.Market.marketCategory)}
        </Text>
      </View>
      <View style={styles.OrderListCardEmpty}></View>
      <View style={styles.OrderListCardFeeAndAmountContainer}>
        <View style={styles.OrderListCardFeeOptionContainer}>
          <Text style={styles.OrderListCardFeeOptionText1}>
            마지막 주문일자 {item.ShoppingCart.Market.createdAt.slice(0, 10)}
          </Text>
        </View>

        <ShortButton1
          containerStyle={styles.OrderListCardShortButton}
          onPress={() => {
            navigation.navigate("WriteReviewPage", {
              userId: item.UserId,
              marketId: item.MarketId,
            });
          }}
        >
          리뷰 작성
        </ShortButton1>
        <View style={styles.OrderListCardAmountContainer}>
          <Text style={styles.OrderListCardAmountText}>
            총 {item.ShoppingCart.ShoppingGoodsBundles.length}개
          </Text>
          <Image
            source={icons.downArrowBlack}
            style={styles.OrderListCardAmountIcon}
          />
        </View>
      </View>
    </View>
  );
};

export default OrderListCard;
