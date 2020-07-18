import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { ShortButton, RenderReviewCards } from "../../../components";
import { fonts, colors } from "../../../constants";
import { getWidth, getHeight } from "../../../utils/helper";
import { icons } from "../../../assets";
import { useNavigation } from "@react-navigation/native";
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
  ReadReviewPageShortButton: {
    width: 74,
    height: 36,
    marginTop: 20,
  },
});

const ReadReviewPage = () => {
  const navigation = useNavigation();
  const [reviews, setReviews] = React.useState([
    { name: "점순이", score: 5, text: "와 정말 저렴하고 좋아요!", image: null },
    { name: "아이유", score: 5, text: "여기 물건 엄청 좋아요!", image: null },
    {
      name: "김태희",
      score: 2,
      text: "여기 물건 품질이 별로 안좋네요..!",
      image: null,
    },
    { name: "지헌", score: 3, text: "그럭저럭 쏘쏘해요", image: null },
    {
      name: "혜리",
      score: 4,
      text: "쓸만해요. 엄청 좋지는 않구요",
      image: null,
    },
  ]);
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
        <Text style={styles.ReadReviewPageHeaderText}>BRAND TITLE</Text>
      </View>
      <View style={styles.ReadReviewPageTextInfoAndButtonContainer}>
        <View>
          <Text style={styles.ReadReviewPageReviewCountText}>
            최근 리뷰 2개
          </Text>
          <Text style={styles.ReadReviewPageShopKeeperCommentCountText}>
            사장님 댓글 2개
          </Text>
          <View style={styles.ReadReviewPageScoreContainer}>
            <Image source={icons.star} style={styles.ReadReviewPageScoreIcon} />
            <Text style={styles.ReadReviewPageScoreText}>4.2</Text>
          </View>
        </View>
        <View style={styles.ReadReviewPageEmpty}></View>
        <View>
          <ShortButton containerStyle={styles.ReadReviewPageShortButton}>
            리뷰 작성
          </ShortButton>
        </View>
      </View>
      <RenderReviewCards reviews={reviews} />
    </View>
  );
};

export default ReadReviewPage;
