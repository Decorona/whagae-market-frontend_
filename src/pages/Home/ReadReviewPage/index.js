import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { RenderReviewCards } from "../../../components";
import { fonts, colors } from "../../../constants";
import { getWidth, getHeight } from "../../../utils/helper";
import { icons } from "../../../assets";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
const styles = StyleSheet.create({
  ReadReviewPageContainer: {
    flex: 1,
  },
  ReadReviewPageHeaderContainer: {
    flexDirection: "row",
    height: getHeight(61),
    width: getWidth(375),
  },
  ReadReviewPageHeaderText: {
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -0.28,
    fontFamily: fonts.Medium,
    color: colors.black65,
    marginLeft: 21,
    alignSelf: "center",
  },
  ReadReviewPageHeaderGobackIconContainer: {
    marginLeft: 16,
    alignSelf: "center",
  },
  ReadReviewPageHeaderGobackIcon: {
    width: 14,
    height: 23.3,
  },
  ReadReviewPageTextInfoAndButtonContainer: {
    paddingLeft: 14,
    paddingRight: 27,
    flexDirection: "row",
    paddingBottom: 13.4,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.grey89,
  },
  ReadReviewPageReviewCountText: {
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 36,
    letterSpacing: -1.8,
    fontFamily: fonts.Medium,
    color: colors.grey89,
  },
  ReadReviewPageShopKeeperCommentCountText: {
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: -1.2,
    fontFamily: fonts.Medium,
    color: colors.grey89,
  },
  ReadReviewPageScoreContainer: {
    flexDirection: "row",
    marginTop: 6,
  },
  ReadReviewPageScoreIcon: {
    width: 32.1,
    height: 29.4,
  },
  ReadReviewPageScoreText: {
    fontSize: 21,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 31,
    letterSpacing: -1.58,
    fontFamily: fonts.Medium,
    color: colors.black70,
    marginLeft: 7.9,
  },
  ReadReviewPageButtonContainer: {},
  ReadReviewPageEmpty: {
    flex: 1,
  },
});

const ReadReviewPage = () => {
  const navigation = useNavigation();
  const appStatus = useSelector((state) => state.appStatus);
  const dispatch = useDispatch();
  return (
    <View style={styles.ReadReviewPageContainer}>
      <View style={styles.ReadReviewPageHeaderContainer}>
        <TouchableOpacity
          style={styles.ReadReviewPageHeaderGobackIconContainer}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={icons.leftArrowBlack}
            style={styles.ReadReviewPageHeaderGobackIcon}
          ></Image>
        </TouchableOpacity>
        <Text style={styles.ReadReviewPageHeaderText}>
          {appStatus.storeItems.marketName}
        </Text>
      </View>
      <View style={styles.ReadReviewPageTextInfoAndButtonContainer}>
        <View>
          <Text style={styles.ReadReviewPageReviewCountText}>
            최근 리뷰 {appStatus.storeReviews.length}개
          </Text>
          <Text style={styles.ReadReviewPageShopKeeperCommentCountText}>
            사장님 댓글 2개
          </Text>
          <View style={styles.ReadReviewPageScoreContainer}>
            <Image source={icons.star} style={styles.ReadReviewPageScoreIcon} />
            <Text style={styles.ReadReviewPageScoreText}>
              {appStatus.storeItems.marketStarPoint}
            </Text>
          </View>
        </View>
      </View>
      <RenderReviewCards />
    </View>
  );
};

export default ReadReviewPage;
