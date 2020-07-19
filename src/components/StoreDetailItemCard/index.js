import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { colors, fonts } from "../../constants";
import { getHeight, getWidth } from "../../utils/helper";
import { useNavigation } from "@react-navigation/native";
const styles = StyleSheet.create({
  StoreDetailItemCardContainer: {
    width: getWidth(375),
    height: getHeight(160),
    backgroundColor: colors.greyf7,
    flexDirection: "row",
    marginTop: 20,
  },
  StoreDetailItemCardImage: {
    width: 110,
    height: 110,
    borderRadius: 8,
    backgroundColor: colors.grey,
    alignSelf: "center",
    marginLeft: 16,
  },
  StoreDetailItemCardTextContainer: {
    marginLeft: 16.5,
    marginTop: 21,
  },
  StoreDetailItemCardNameText: {
    width: getWidth(72),
    height: getHeight(29),
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 29,
    letterSpacing: -1.5,
    fontFamily: fonts.Medium,
    color: colors.textblack,
  },
  StoreDetailItemCardPriceText: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 29,
    letterSpacing: -1.5,
    fontFamily: fonts.Medium,
    color: colors.textblack,
  },
  StoreDetailItemCardEmpty: {
    flex: 1,
  },
  StoreDetailItemCardSticker: {
    width: getWidth(40),
    height: getHeight(48),
    backgroundColor: colors.grey,
    marginRight: 17,
  },
});

const StoreDetailItemCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.StoreDetailItemCardContainer}
      onPress={() =>
        navigation.navigate("ItemDetail", {
          id: item.id,
        })
      }
    >
      <View style={styles.StoreDetailItemCardImage}></View>
      <View style={styles.StoreDetailItemCardTextContainer}>
        <Text style={styles.StoreDetailItemCardNameText}>{item.goodsName}</Text>
        <Text style={styles.StoreDetailItemCardPriceText}>{item.price}원</Text>
      </View>
      <View style={styles.StoreDetailItemCardEmpty}></View>
      <View style={styles.StoreDetailItemCardSticker}></View>
    </TouchableOpacity>
  );
};

export default StoreDetailItemCard;
