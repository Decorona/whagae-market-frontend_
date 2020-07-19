import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { colors, fonts } from "../../constants";
import { getHeight, getWidth } from "../../utils/helper";
import { icons } from "../../assets";

import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  BasketItemCardContainer: {
    width: getWidth(342),
    height: 88,
    paddingVertical: 16,
    borderRadius: 8,
    backgroundColor: colors.white8,
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 10,
  },
  BasketItemCardIcon: {
    width: 56,
    height: 56,
    marginLeft: 10,
  },
  BasketItemCardNameAndCategoryContainer: {
    marginLeft: 10,
  },
  BasketItemCardNameText: {
    fontSize: 19,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 29,
    letterSpacing: -1.5,
    fontFamily: fonts.Medium,
    color: colors.gray3,
  },
  BasketItemCardCategoryText: {
    fontSize: 17,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 29,
    letterSpacing: -1.5,
    fontFamily: fonts.Medium,
    color: colors.grey89,
  },
  BasketItemCardEmpty: {
    flex: 1,
  },
  BasketItemCardFeeOptionContainer: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  BasketItemCardFeeOptionText1: {
    fontSize: 10,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 12,
    letterSpacing: -0.6,
    fontFamily: fonts.Medium,
    color: colors.greyb5,
  },
  BasketItemCardFeeOptionText2: {
    fontSize: 11,
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
    fontSize: 11,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 18,
    letterSpacing: -0.9,
    fontFamily: fonts.Medium,
    color: colors.gray6,
  },
  BasketItemCardAmountIcon: {
    width: 10,
    height: 20,
    display: "flex",
    justifyContent: "center",
    marginLeft: 3,
  },
  BasketItemCardFeeAndAmountContainer: {
    marginRight: 13,
  },
});

const marketCategory = {
  mart: "마트",
  hairshop: "헤어샵",
  hardware_store: "철물점",
  flowershop: "꽃집",
  nail_art: "네일아트",
  dress: "옷",
  glasses: "안경점",
  cleaning: "세탁소",
};

const BasketItemCard = ({ item }) => {
  const navigation = useNavigation();

  // console.log(item);

  return (
    <TouchableOpacity
      style={styles.BasketItemCardContainer}
      onPress={() => {
        navigation.navigate("BasketDetail", {
          bundleList: item.shoppingGoodsBundles,
        });
      }}
    >
      <View style={styles.BasketItemCardIcon}>
        <Image source={item.marketPhoto} />
      </View>
      <View style={styles.BasketItemCardNameAndCategoryContainer}>
        <Text style={styles.BasketItemCardNameText}>{item.name}</Text>
        <Text style={styles.BasketItemCardCategoryText}>
          {marketCategory[item.categoryName]}
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
          <View style={styles.BasketItemCardAmountIcon}>
            <Image
              source={icons.arrowDown}
              style={{
                width: 10,
                height: 6,
              }}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BasketItemCard;
