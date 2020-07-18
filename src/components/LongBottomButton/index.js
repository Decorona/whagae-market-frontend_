import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { fonts, colors } from "../../constants";
import { getHeight, getWidth, height } from "../../utils/helper";

const styles = StyleSheet.create({
  LongBottomButtonContainer: {
    width: getWidth(375),
    height: getHeight(58),
    backgroundColor: colors.greya5,
    position: "absolute",
    justifyContent: "center",
    bottom: 0,
  },
  LongBottomButtonMainText: {
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: -1.2,
    color: colors.white,
    fontFamily: fonts.Medium,
    alignSelf: "center",
  },
  LongBottomButtonPriceText: {
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -1.05,
    color: colors.white,
    fontFamily: fonts.Medium,
    position: "absolute",
    right: 23,
  },
});

const LongBottomButton = ({ children, price }) => {
  return (
    <TouchableOpacity style={styles.LongBottomButtonContainer}>
      {price && <Text style={styles.LongBottomButtonPriceText}>{price}원</Text>}

      <Text style={styles.LongBottomButtonMainText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default LongBottomButton;
