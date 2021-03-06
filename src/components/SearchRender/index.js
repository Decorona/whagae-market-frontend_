import * as React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { getWidth, getHeight } from "../../utils/helper";
import { colors, fonts } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { icons } from "../../assets";
import { ScrollView } from "react-native-gesture-handler";
const styles = StyleSheet.create({
  RenderItemsComponentsContainer: {
    paddingHorizontal: 11,
    paddingTop: 12.5,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: colors.greyef,
  },
  RenderItemsComponentsEmpty: {
    flex: 0.9,
  },
  RenderItemsComponentsFlatList: {
    flexDirection: "column",
  },
  RenderItemsComponentsItemContainer: {
    backgroundColor: colors.white,
    width: getWidth(166),
    height: getHeight(246),
    margin: 5,
  },
  RenderItemsComponentsItemImage: {
    width: getWidth(166),
    height: getHeight(166),
  },
  RenderItemsComponentsItemInfoContainer: {},
  RenderItemsComponentsItemTitleAndScoreContainer: {
    flexDirection: "row",
    marginLeft: 5,
  },
  RenderItemsComponentsItemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: -1.2,
    fontFamily: fonts.Medium,
    color: colors.textblack,
  },
  RenderItemsComponentsItemScoreText: {
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -1.05,
    fontFamily: fonts.Medium,
    color: colors.grey,
    alignSelf: "center",
    marginLeft: 3,
  },
  FullStar: {
    width: 12,
    height: 12,
    alignSelf: "center",
  },
  RenderItemsComponentsItemReviewAndCommentContainer: {
    marginLeft: 5,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: colors.yellow,
    paddingBottom: 5.8,
  },
  RenderItemsComponentsItemReviewText: {
    fontSize: 8,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 12,
    letterSpacing: -0.6,
    color: colors.grey,
    alignSelf: "center",
    fontFamily: fonts.Medium,
  },

  RenderItemsComponentsItemDeliveryContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 5,
  },
  RenderItemsComponentsItemDeliveryFeeText: {
    fontSize: 8,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 12,
    letterSpacing: -0.6,
    color: colors.grey,
    fontFamily: fonts.Medium,
  },
  RenderItemsComponentsItemDeliveryTimeText: {
    fontSize: 8,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 12,
    letterSpacing: -0.6,
    color: colors.textblack,
    fontFamily: fonts.Medium,
  },
  logoOption: {
    width: getWidth(166),
    height: getHeight(156),
  },
});

const SearchRender = ({ stores, search }) => {
  const navigation = useNavigation();
  const temp = () => {
    return stores.map((item) => {
      return renderItems(item);
    });
  };
  const renderItems = (item) => {
    console.log(item);
    return (
      <TouchableOpacity
        style={styles.RenderItemsComponentsItemContainer}
        onPress={() =>
          navigation.navigate("StoreDetail", {
            id: item.id,
          })
        }
      >
        <Image
          source={{ uri: item.Market.marketPhoto }}
          style={styles.RenderItemsComponentsItemImage}
        />
        <View>
          <View style={styles.RenderItemsComponentsItemTitleAndScoreContainer}>
            <Text style={styles.RenderItemsComponentsItemTitle}>
              {item.Market.marketName} ({item.goodsName})
            </Text>

            <View style={styles.RenderItemsComponentsEmpty}></View>

            <Image source={icons.fullStar} style={styles.FullStar}></Image>

            <Text style={styles.RenderItemsComponentsItemScoreText}>
              {item.Market.marketStarPoint}
            </Text>
          </View>
          <View
            style={styles.RenderItemsComponentsItemReviewAndCommentContainer}
          >
            <Text style={styles.RenderItemsComponentsItemReviewText}>
              최근 리뷰 {item.Market.MarketReviews.length}
            </Text>
          </View>
          <View style={styles.RenderItemsComponentsItemDeliveryContainer}>
            <Text style={styles.RenderItemsComponentsItemDeliveryTimeText}>
              배달비 {item.Market.deliveryFee}원
            </Text>
            <View style={styles.RenderItemsComponentsEmpty} />
            <Text style={styles.RenderItemsComponentsItemDeliveryTimeText}>
              {item.Market.deliveryTime}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView
      contentContainerStyle={styles.RenderItemsComponentsContainer}
      showsVerticalScrollIndicator={false}
    >
      {temp()}
    </ScrollView>
  );
};
export default SearchRender;
