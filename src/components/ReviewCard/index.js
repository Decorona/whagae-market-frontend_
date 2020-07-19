import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { getWidth } from "../../utils/helper";
import { colors, fonts } from "../../constants";
import { icons } from "../../assets";

const styles = StyleSheet.create({
  ReviewCardContainer: {
    width: getWidth(375),
    paddingLeft: 16,
    paddingRight: 17,
    paddingTop: 20,
  },
  ReviewCardUserInfoContainer: {
    flexDirection: "row",
  },
  ReviewCardUserImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "red",
  },
  ReviewCardUserNameAndScoreContainer: {
    marginLeft: 10,
  },
  ReviewCardUserName: {
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -1.05,
    color: colors.black65,
    fontFamily: fonts.Medium,
  },
  ReviewCardText: {
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -1.05,
    fontFamily: fonts.Medium,
    color: colors.black65,
    marginTop: 10,
  },
  ReviewCardStar: {
    width: 14,
    height: 12.8,
  },
  ReviewCardStarContainer: {
    flexDirection: "row",
  },
  ReviewCardShopKeeperContainer: {
    width: getWidth(342),
    backgroundColor: colors.greye6,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 13,
  },
  ReviewCardShopKeeperNameText: {
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -1.05,
    fontFamily: fonts.Medium,
    color: colors.black65,
  },
  ReviewCardShopKeeperCommentText: {
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -1.05,
    fontFamily: fonts.Medium,
    color: colors.black65,
    marginTop: 3,
  },
});

const ReviewCard = ({ review }) => {
  const renderStars = React.useCallback(() => {
    return [...Array(Math.floor(review.reviewStarPoint))].map(() => {
      return <Image source={icons.star} style={styles.ReviewCardStar} />;
    });
  }, []);
  return (
    <View style={styles.ReviewCardContainer}>
      <View style={styles.ReviewCardUserInfoContainer}>
        <Image
          source={{ uri: review.User.profileImg }}
          style={styles.ReviewCardUserImage}
        />
        <View style={styles.ReviewCardUserNameAndScoreContainer}>
          <Text>{review.User.name}</Text>
          <View style={styles.ReviewCardStarContainer}>{renderStars()}</View>
        </View>
      </View>
      <View>
        <Text style={styles.ReviewCardText}>{review.review}</Text>
      </View>
      {review.MarketOwnerReview !== null && (
        <View style={styles.ReviewCardShopKeeperContainer}>
          <Text style={styles.ReviewCardShopKeeperNameText}>사장님</Text>
          <Text style={styles.ReviewCardShopKeeperCommentText}>
            {review.MarketOwnerReview.review}
          </Text>
        </View>
      )}
    </View>
  );
};

export default ReviewCard;
