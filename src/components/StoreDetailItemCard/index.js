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
    marginTop: 31,
  },
  StoreDetailItemCardNameText: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 29,
    letterSpacing: -1.5,
    fontFamily: fonts.Medium,
    color: colors.grey89,
  },
  StoreDetailItemCardPriceText: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 29,
    letterSpacing: -1.5,
    fontFamily: fonts.Medium,
    color: colors.grey89,
  },
  StoreDetailItemCardEmpty: {
    flex: 1,
  },
  StoreDetailItemCardSticker: {
    width: 41,
    height: 64,
    backgroundColor: colors.grey,
    marginRight: 17,
  },
});

const StoreDetailItemCard = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.StoreDetailItemCardContainer}
      onPress={() => navigation.navigate("ItemDetail")}
    >
      <View style={styles.StoreDetailItemCardImage}></View>
      <View style={styles.StoreDetailItemCardTextContainer}>
        <Text style={styles.StoreDetailItemCardNameText}>상품 이름</Text>
        <Text style={styles.StoreDetailItemCardPriceText}>45000원</Text>
      </View>
      <View style={styles.StoreDetailItemCardEmpty}></View>
      <View style={styles.StoreDetailItemCardSticker}></View>
    </TouchableOpacity>
  );
};

export default StoreDetailItemCard;
