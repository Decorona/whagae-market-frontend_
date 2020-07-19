import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { getWidth, getHeight } from "../../../utils/helper";
import { icons } from "../../../assets";
import { colors, fonts } from "../../../constants";
import { URL_POST_REVIEW } from "../../../constants/api";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { LongBottomButton } from "../../../components";
import axios from "axios";
const styles = StyleSheet.create({
  WriteReviewPageContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  WriteReviewPageHeaderContainer: {
    width: getWidth(375),
    height: getHeight(61),
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.gold1,
  },
  WriteReviewPageHeaderText: {
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -0.28,
    color: colors.white,
    fontFamily: fonts.Medium,
    marginLeft: 21,
  },
  WriteReviewPageHeaderGobackButtonContainer: {
    marginLeft: 16,
  },
  WriteReviewPageHeaderGobackButtonIcon: {
    width: 14,
    height: 23.3,
  },
  WriteReviewPageContentContainer: {
    marginTop: 23,
  },
  WriteReviewPageScoreText1: {
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: -1.2,
    fontFamily: fonts.Medium,
    color: colors.textblack,
    alignSelf: "center",
  },
  WriteReviewPageScoreText2: {
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 45,
    letterSpacing: -2.25,
    fontFamily: fonts.Medium,
    color: colors.textblack,
    alignSelf: "center",
  },
  WriteReviewPageStarsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 64,
  },

  WriteReviewPageStar: {
    width: 32.1,
    height: 29.4,
  },
  WriteReviewPageTextInputContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 39.6,
  },
  WriteReviewPageTextInputText: {
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: -1.2,
    fontFamily: fonts.Medium,
    color: colors.textblack,
  },
  WriteReviewPageTextInput: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: colors.greye6,
    marginTop: 6,
    paddingTop: 8,
    paddingLeft: 12,
  },
  WriteReviewPageTextInputPlaceHolder: {
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",

    letterSpacing: -1.05,
    fontFamily: fonts.Medium,
    color: colors.black70,
  },
});

const WriteReviewPage = () => {
  const [stars, setStars] = React.useState(5);
  const navigation = useNavigation();
  const [buttonJudge, setButtonJudge] = React.useState(true);
  const [reviewContent, setReviewContent] = React.useState("");
  const appStatus = useSelector((state) => state.appStatus);
  const _writeReview = async () => {
    try {
      const body = {
        review: reviewContent,
        revievImage: "",
        reviewPoint: stars,
        marketId: 2,
        purchaseOrderId: 1,
        userId: 1,
      };
      const res = await axios.post(URL_POST_REVIEW, body, {});
      if (res.status === 200) {
        navigation.goBack();
      }
    } catch (error) {
      alert("리뷰 작성에 실패했습니다.");
      console.dir(error);
      console.error(error);
    }
  };
  const renderStars = (stars) => {
    return [...Array(5)].map((item, index) => {
      return (
        <TouchableOpacity
          onPress={() => {
            setStars(index + 1);
          }}
        >
          {index + 1 <= stars ? (
            <Image source={icons.goldStar} style={styles.WriteReviewPageStar} />
          ) : (
            <Image source={icons.star} style={styles.WriteReviewPageStar} />
          )}
        </TouchableOpacity>
      );
    });
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.WriteReviewPageContainer}>
        <View style={styles.WriteReviewPageHeaderContainer}>
          <TouchableOpacity
            style={styles.WriteReviewPageHeaderGobackButtonContainer}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image
              source={icons.leftArrowWhite}
              style={styles.WriteReviewPageHeaderGobackButtonIcon}
            />
          </TouchableOpacity>
          <Text style={styles.WriteReviewPageHeaderText}>리뷰 작성</Text>
        </View>
        <View style={styles.WriteReviewPageContentContainer}>
          <Text style={styles.WriteReviewPageScoreText1}>별점</Text>
          <Text style={styles.WriteReviewPageScoreText2}>{stars}</Text>
          <View style={styles.WriteReviewPageStarsContainer}>
            {renderStars(stars)}
          </View>
        </View>
        <View style={styles.WriteReviewPageTextInputContainer}>
          <Text style={styles.WriteReviewPageTextInputText}>리뷰 내용</Text>
          <View style={styles.WriteReviewPageTextInput}>
            <TextInput
              placeholder={"리뷰 내용"}
              value={reviewContent}
              multiline={true}
              style={styles.WriteReviewPageTextInputPlaceHolder}
              onChangeText={(Text) => {
                setReviewContent(Text);
              }}
              onFocus={() => {
                setButtonJudge(false);
              }}
              onBlur={() => {
                setButtonJudge(true);
              }}
            ></TextInput>
          </View>
        </View>
        {buttonJudge && (
          <LongBottomButton onPress={() => _writeReview()}>
            작성 완료
          </LongBottomButton>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default WriteReviewPage;
