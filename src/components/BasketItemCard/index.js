import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors, fonts } from "../../constants";
import { getHeight, getWidth } from "../../utils/helper";

const styles = StyleSheet.create({
  BasketItemCardContainer: {
    width: getWidth(342),
    height: 88,
    paddingVertical: 16,
    borderRadius: 8,
    backgroundColor: colors.lightgrey2,
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 10,
  },
  BasketItemCardIcon: {
    width: 56,
    height: 56,
    backgroundColor: "red",
    marginLeft: 10,
  },
  BasketItemCardNameAndCategoryContainer: {
    marginLeft: 10,
  },
  BasketItemCardNameText: {
    fontSize: 20,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 29,
    letterSpacing: -1.5,
    fontFamily: fonts.Medium,
    color: colors.black65,
  },
  BasketItemCardCategoryText: {
    fontSize: 20,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 29,
    letterSpacing: -1.5,
    fontFamily: fonts.Medium,
    color: colors.greyb5,
  },
  BasketItemCardEmpty: {
    flex: 1,
  },
  BasketItemCardFeeOptionContainer: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  BasketItemCardFeeOptionText1: {
    fontSize: 8,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 12,
    letterSpacing: -0.6,
    fontFamily: fonts.Medium,
    color: colors.greyb5,
  },
  BasketItemCardFeeOptionText2: {
    fontSize: 8,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 12,
    letterSpacing: -0.6,
    fontFamily: fonts.Medium,
    marginLeft: 1,
  },
  BasketItemCardFeeText1: {
    fontSize: 20,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 29,
    letterSpacing: -1.5,
    fontFamily: fonts.Medium,
    color: colors.black6c,
  },
  BasketItemCardFeeText2: {
    fontSize: 12,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 18,
    letterSpacing: -0.9,
    fontFamily: fonts.Medium,
    color: colors.black6c,
    alignSelf: "center",
    marginLeft: 1,
  },
  BasketItemCardFeeContainer: {
    flexDirection: "row",
  },
  BasketItemCardAmountContainer: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  BasketItemCardAmountText: {
    fontSize: 12,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 18,
    letterSpacing: -0.9,
    fontFamily: fonts.Medium,
    color: colors.greyb5,
  },
  BasketItemCardAmountIcon: {
    width: 10,
    height: 10,
    backgroundColor: "red",
    alignSelf: "center",
    marginLeft: 3,
  },
  BasketItemCardFeeAndAmountContainer: {
    marginRight: 13,
  },
});

const BasketItemCard = ({ item }) => {
  return (
    <TouchableOpacity style={styles.BasketItemCardContainer}>
      <View style={styles.BasketItemCardIcon}></View>
      <View style={styles.BasketItemCardNameAndCategoryContainer}>
        <Text style={styles.BasketItemCardNameText}>{item.name}</Text>
        <Text style={styles.BasketItemCardCategoryText}>
          {item.categoryName}
        </Text>
      </View>
      <View style={styles.BasketItemCardEmpty}></View>
      <View style={styles.BasketItemCardFeeAndAmountContainer}>
        <View style={styles.BasketItemCardFeeOptionContainer}>
          <Text style={styles.BasketItemCardFeeOptionText1}>배송비</Text>
          <Text style={styles.BasketItemCardFeeOptionText2}>무료</Text>
        </View>

        <View style={styles.BasketItemCardFeeContainer}>
          <Text style={styles.BasketItemCardFeeText1}>{item.price}</Text>
          <Text style={styles.BasketItemCardFeeText2}>원</Text>
        </View>
        <View style={styles.BasketItemCardAmountContainer}>
          <Text style={styles.BasketItemCardAmountText}>
            총 {item.amount}개
          </Text>
          <View style={styles.BasketItemCardAmountIcon}></View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BasketItemCard;
