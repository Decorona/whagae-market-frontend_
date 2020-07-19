import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { colors, fonts } from "../../constants";
import { getHeight, getWidth } from "../../utils/helper";
import { useNavigation } from "@react-navigation/native";
import { icons } from "../../assets";

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
});

const OrderListCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.OrderListCardContainer}
      onPress={() => {
        navigation.navigate("OrderListDtl");
      }}
    >
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
          <Image
            source={icons.downArrowBlack}
            style={styles.OrderListCardAmountIcon}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OrderListCard;
