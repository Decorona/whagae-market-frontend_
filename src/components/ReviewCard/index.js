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
});

const ReviewCard = ({ review }) => {
  const renderStars = React.useCallback((score) => {
    return [...Array(score)].map(() => {
      return <Image source={icons.star} style={styles.ReviewCardStar} />;
    });
  }, []);
  return (
    <View style={styles.ReviewCardContainer}>
      <View style={styles.ReviewCardUserInfoContainer}>
        <View style={styles.ReviewCardUserImage}></View>
        <View style={styles.ReviewCardUserNameAndScoreContainer}>
          <Text>{review.name}</Text>
          <View style={styles.ReviewCardStarContainer}>
            {renderStars(review.score)}
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.ReviewCardText}>{review.text}</Text>
      </View>
    </View>
  );
};

export default ReviewCard;
