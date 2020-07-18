import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors, fonts } from "../../constants";
import { getHeight, getWidth } from "../../utils/helper";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  OrderListCardDtlContainer: {
    width: getWidth(342),
    height: getHeight(138),
    borderRadius: 3,
    backgroundColor: colors.greyf0,
    alignSelf: "center",
    marginTop: 20,
  },
  OrderListCardDtlNameAndCategoryContainer: {
    marginLeft: 10,
  },
  ProductNameLine: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  PriceQuantityLine: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  TotalPriceLine: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ProductName: {
    width: getWidth(142),
    height: getHeight(29),
    lineHeight: 29,
    letterSpacing: -1.5,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: fonts.Medium,
    color: colors.black65,
  },
  OrderDate: {
    width: getWidth(80),
    height: getHeight(15),
    lineHeight: 15,
    letterSpacing: -0.75,
    fontSize: 10,
    color: colors.grey89,
  },
  BasicPrice: {
    width: getWidth(74),
    height: getHeight(18),
    lineHeight: 18,
    letterSpacing: -0.9,
    fontSize: 12,
    color: colors.grey89,
  },
  Price: {
    width: getWidth(66),
    height: getHeight(24),
    lineHeight: 24,
    fontWeight: "bold",
    letterSpacing: -1.2,
    fontSize: 16,
    color: colors.grey89,
  },
  Amount: {
    width: getWidth(32),
    height: getHeight(24),
    lineHeight: 24,
    fontWeight: "bold",
    letterSpacing: -1.2,
    fontSize: 16,
    color: colors.grey89,
  },
  Total: {
    width: getWidth(25),
    height: getHeight(20),
    lineHeight: 20,
    letterSpacing: -1.05,
    fontSize: 14,
    color: colors.grey89,
  },
  TotalPrice: {
    width: getWidth(66),
    height: getHeight(24),
    lineHeight: 24,
    fontWeight: "bold",
    letterSpacing: -1.2,
    fontSize: 16,
    color: colors.grey89,
  },
  HorizntalLine: {
    marginTop: 5,
    borderBottomWidth: 1,
  },
});

const OrderListCardDtl = ({ item }) => {
  const navigation = useNavigation();
  const multiple = parseInt(item.price, 10) * parseInt(item.amount, 10);
  return (
    <TouchableOpacity
      style={styles.OrderListCardDtlContainer}
      onPress={() => {
        navigation.navigate("OrderListDtl");
      }}
    >
      <View style={styles.OrderListCardDtlNameAndCategoryContainer}>
        <View style={styles.ProductNameLine}>
          <Text style={styles.ProductName}>{item.name}</Text>
          <Text style={styles.OrderDate}>주문일자 20.07.17</Text>
        </View>
        <Text style={styles.BasicPrice}>기본: {item.price}원</Text>
        <View style={styles.PriceQuantityLine}>
          <Text style={styles.Price}>{item.price}원</Text>
          <Text style={styles.Amount}>{item.amount}개</Text>
        </View>
        <View style={styles.HorizntalLine} />
        <View style={styles.TotalPriceLine}>
          <Text style={styles.Total}>합계</Text>
          <Text style={styles.TotalPrice}>{multiple + ",000"}원</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OrderListCardDtl;
