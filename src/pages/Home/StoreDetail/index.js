import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { RenderStoreDetailItems, ShortButton } from "../../../components";
import { colors, fonts } from "../../../constants";
import { getHeight, getWidth } from "../../../utils/helper";
import { icons } from "../../../assets";
import { useNavigation } from "@react-navigation/native";
const styles = StyleSheet.create({
  StoreDetailContainer: {
    flex: 1,
  },
  StoreDetailGobackAndDibButtonContainer: {
    height: getHeight(61),
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
  },
  StoreDetailGobackbutton: {
    width: 14,
    height: 23.3,
  },
  StoreDetailGobackbuttonContainer: {
    marginLeft: 16,
  },
  StoreDetaildibButtonContainer: {
    flexDirection: "row",
    marginRight: 17,
    alignItems: "center",
  },
  StoreDetaildibButton: {
    width: 20,
    height: 17.5,
  },
  StoreDetaildibText: {
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -1.05,
    fontFamily: fonts.Medium,
    color: colors.grey89,
    marginLeft: 6,
  },
  StoreDetailEmpty: {
    flex: 1,
  },
  StoreDetailStoreInfo: {},
  StoreDetailStoreImage: {
    width: getWidth(375),
    height: getHeight(174),
    backgroundColor: "red",
  },
  StoreDetailStoreTextInfoContainer: {
    flexDirection: "row",
    paddingLeft: 14,
    paddingRight: 17,
    backgroundColor: colors.white,
    paddingBottom: 26,
  },
  StoreDetailStoreTextInfoContainer1: {
    marginTop: 9,
  },
  StoreDetailStoreCategoryText: {
    fontSize: 12,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 18,
    letterSpacing: -0.9,
    fontFamily: fonts.Medium,
    color: colors.grey89,
  },
  StoreDetailStoreNameText: {
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 36,
    letterSpacing: -1.8,
    fontFamily: fonts.Medium,
    color: colors.grey89,
  },
  StoreDetailStoreTextInfoContainer2: {
    flexDirection: "row",
  },
  StoreDetailStoreCommentText: {
    fontSize: 10,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 15,
    letterSpacing: -0.75,
    fontFamily: fonts.Medium,
    color: colors.grey89,
  },
  StoreDetailStoreBar: {
    height: 11,
    width: 1,
    backgroundColor: colors.grey89,
    alignSelf: "center",
    marginLeft: 5,
  },
  StoreDetailStoreReviewText: {
    fontSize: 10,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 15,
    letterSpacing: -0.75,
    fontFamily: fonts.Medium,
    color: colors.grey89,
    marginLeft: 5,
  },
  StoreDetailStoreScoreAndFeeContainer: {},
  StoreDetailStoreScoreContainer: { flexDirection: "row", marginTop: 24 },
  StoreDetailStoreScoreIcon: {
    width: 20,
    height: 18.3,
  },
  StoreDetailStoreScoreText: {
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -1.05,
    color: colors.black70,
    fontFamily: fonts.Medium,
    marginLeft: 5,
  },
  StoreDetailStoreFeeText: {
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -1.05,
    color: colors.grey89,
    fontFamily: fonts.Medium,
  },
  StoreDetailStoreItemsContainer: { flex: 1 },
  StoreDetailStoreItemsFlatListContainer: {
    backgroundColor: colors.white,
    flex: 1,
  },
  StoreDetailStoreItemsCategoryButtonContainer: {
    flexDirection: "row",
    borderTopWidth: 6,
    borderTopColor: colors.greye0,
  },
  StoreDetailStoreItemsPopularityText: {
    fontFamily: "NotoSansCJKkr-Bold",
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: -1.2,
    color: colors.black76,
    alignSelf: "center",
  },
  StoreDetailStoreItemsTotalText: {
    fontFamily: "NotoSansCJKkr-Bold",
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: -1.2,
    color: colors.grey89,
    alignSelf: "center",
  },
  StoreDetailStoreItemsCategoryButton1Inactive: {
    width: getWidth(187.5),
    height: getHeight(35),
    backgroundColor: colors.greyeb,
    justifyContent: "center",
  },
  StoreDetailStoreItemsCategoryButton1Active: {
    width: getWidth(187.5),
    height: getHeight(35),
    backgroundColor: colors.white,
    justifyContent: "center",
  },
  StoreDetailStoreItemsCategoryButton2Active: {
    width: getWidth(187.5),
    height: getHeight(35),
    backgroundColor: colors.white,
    justifyContent: "center",
  },
  StoreDetailStoreItemsCategoryButton2Inactive: {
    width: getWidth(187.5),
    height: getHeight(35),
    backgroundColor: colors.greyeb,
    justifyContent: "center",
  },
  StoreDetailStoreReviewButton: {
    width: 56,
    height: 24,
    marginTop: 10,
  },
});

const StoreDetail = () => {
  const [popularItems, setPopularitems] = React.useState([
    { name: "수세미" },
    { name: "샴푸" },
    { name: "바디워시" },
    { name: "락스" },
    { name: "고무장갑" },
  ]);
  const [totalItems, setTotalItems] = React.useState([
    { name: "수세미" },
    { name: "샴푸" },
    { name: "바디워시" },
  ]);

  const [listJudge, setListJudge] = React.useState(true);
  const navigation = useNavigation();
  return (
    <View style={styles.StoreDetailContainer}>
      <View style={styles.StoreDetailGobackAndDibButtonContainer}>
        <TouchableOpacity
          style={styles.StoreDetailGobackbuttonContainer}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={icons.leftArrowBlack}
            style={styles.StoreDetailGobackbutton}
          />
        </TouchableOpacity>
        <View style={styles.StoreDetailEmpty} />
        <TouchableOpacity style={styles.StoreDetaildibButtonContainer}>
          <Image
            source={icons.emptyHeart}
            style={styles.StoreDetaildibButton}
          />
          <Text style={styles.StoreDetaildibText}>37</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.StoreDetailStoreInfo}>
        <View style={styles.StoreDetailStoreImage} />
        <View style={styles.StoreDetailStoreTextInfoContainer}>
          <View style={styles.StoreDetailStoreTextInfoContainer1}>
            <Text style={styles.StoreDetailStoreCategoryText}>마트</Text>
            <Text style={styles.StoreDetailStoreNameText}>Brand Text</Text>
            <View style={styles.StoreDetailStoreTextInfoContainer2}>
              <Text style={styles.StoreDetailStoreFeeText}>배달비 무료</Text>
            </View>
          </View>
          <View style={styles.StoreDetailEmpty}></View>
          <View style={styles.StoreDetailStoreScoreAndFeeContainer}>
            <View style={styles.StoreDetailStoreScoreContainer}>
              <Image
                style={styles.StoreDetailStoreScoreIcon}
                source={icons.star}
              />
              <Text style={styles.StoreDetailStoreScoreText}>4.2</Text>
            </View>
            <ShortButton
              containerStyle={styles.StoreDetailStoreReviewButton}
              onPress={() => {
                navigation.navigate("ReadReviewPage");
              }}
            >
              리뷰 01
            </ShortButton>
          </View>
        </View>
      </View>
      <View style={styles.StoreDetailStoreItemsContainer}>
        <View style={styles.StoreDetailStoreItemsCategoryButtonContainer}>
          <TouchableOpacity
            style={[
              listJudge == true
                ? styles.StoreDetailStoreItemsCategoryButton1Inactive
                : styles.StoreDetailStoreItemsCategoryButton1Active,
            ]}
            onPress={() => {
              setListJudge(false);
            }}
          >
            <Text style={styles.StoreDetailStoreItemsPopularityText}>인기</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              listJudge == true
                ? styles.StoreDetailStoreItemsCategoryButton2Active
                : styles.StoreDetailStoreItemsCategoryButton2Inactive,
            ]}
            onPress={() => {
              setListJudge(true);
            }}
          >
            <Text style={styles.StoreDetailStoreItemsTotalText}>전체</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.StoreDetailStoreItemsFlatListContainer}>
          {listJudge == true ? (
            <RenderStoreDetailItems items={totalItems} />
          ) : (
            <RenderStoreDetailItems items={popularItems} />
          )}
        </View>
      </View>
    </View>
  );
};

export default StoreDetail;
