import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { getWidth, getHeight } from "../../../utils/helper";
import { icons } from "../../../assets";

const styles = StyleSheet.create({
  WriteReviewPageContainer: {
    flex: 1,
  },
  WriteReviewPageHeaderContainer: {
    width: getWidth(375),
    height: getHeight(61),
    flexDirection: "row",
  },
  WriteReviewPageHeaderGobackButtonContainer: {
    marginLeft: 16,
    alignSelf: "center",
  },
  WriteReviewPageHeaderGobackButtonIcon: {
    width: 14,
    height: 23.3,
  },
});

const WriteReviewPage = () => {
  return (
    <View style={styles.WriteReviewPageContainer}>
      <View style={styles.WriteReviewPageHeaderContainer}>
        <TouchableOpacity
          style={styles.WriteReviewPageHeaderGobackButtonContainer}
        >
          <Image
            source={icons.leftArrowBlack}
            style={styles.WriteReviewPageHeaderGobackButtonIcon}
          />
        </TouchableOpacity>
        <Text>리뷰 작성</Text>
      </View>
    </View>
  );
};

export default WriteReviewPage;
