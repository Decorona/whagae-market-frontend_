import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors, fonts } from "../../constants";
import { getHeight, getWidth } from "../../utils/helper";

const styles = StyleSheet.create({
  OrderListCardContainer: {
    width: getWidth(342),
    height: 88,
    paddingVertical: 16,
    borderRadius: 8,
    backgroundColor: colors.lightgrey2,
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 20,
  },
  OrderListCardIcon: {
    width: 56,
    height: 56,
    backgroundColor: "red",
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
    color: colors.black65,
  },
  OrderListCardCategoryText: {
    fontSize: 20,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 29,
    letterSpacing: -1.5,
    fontFamily: fonts.Medium,
    color: colors.greyb5,
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
    color: colors.greyb5,
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
  },
  OrderListCardAmountText: {
    fontSize: 12,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 18,
    letterSpacing: -0.9,
    fontFamily: fonts.Medium,
    color: colors.greyb5,
  },
  OrderListCardAmountIcon: {
    width: 10,
    height: 10,
    backgroundColor: "red",
    alignSelf: "center",
    marginLeft: 3,
  },
  OrderListCardFeeAndAmountContainer: {
    marginRight: 13,
    marginBottom: 20,
  },
});

const OrderListCard = ({ item }) => {
  return (
    <TouchableOpacity style={styles.OrderListCardContainer}>
      <View style={styles.OrderListCardIcon}></View>
      <View style={styles.OrderListCardNameAndCategoryContainer}>
        <Text style={styles.OrderListCardNameText}>{item.name}</Text>
        <Text style={styles.OrderListCardCategoryText}>
          {item.categoryName}
        </Text>
      </View>
      <View style={styles.OrderListCardEmpty}></View>
      <View style={styles.OrderListCardFeeAndAmountContainer}>
        <View style={styles.OrderListCardFeeOptionContainer}>
          <Text style={styles.OrderListCardFeeOptionText1}>
            마지막 주문일자 20.07.17
          </Text>
        </View>

        <View style={styles.OrderListCardFeeContainer}>
          <Text style={styles.OrderListCardFeeText1}>{item.price}</Text>
        </View>
        <View style={styles.OrderListCardAmountContainer}>
          <Text style={styles.OrderListCardAmountText}>총 {item.amount}개</Text>
          <View style={styles.OrderListCardAmountIcon}></View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OrderListCard;