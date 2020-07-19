import * as React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors, fonts } from "../../../constants";
import RenderMyPageMenu from "../../../components/RenderMyPageMenu";
import { getWidth, getHeight } from "../../../utils/helper";

const styles = StyleSheet.create({
  MyPageContainer: {
    flex: 1,
    backgroundColor: colors.backgroundgrey,
    justifyContent: "center",
  },
  MyPageTopIconArea: {
    padding: 10,
    alignItems: "center",
  },
  MyPageUserIcon: {
    width: getWidth(56),
    height: getHeight(56),
    borderRadius: 96,
    backgroundColor: colors.greyb5,
  },
  MyPageUserTitletext: {
    marginTop: 15,
    width: getWidth(52),
    height: getHeight(29),
    lineHeight: 24,
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    textAlign: "center",
    fontFamily: fonts.Medium,
    color: colors.textblack,
  },
  MyPageUserPointtext: {
    marginTop: 5,
    textAlign: "center",
    width: getWidth(58),
    height: getHeight(29),
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 24,
    color: colors.yellow,
  },
  MyPagePrevillageContainer: {
    width: getWidth(342),
    height: getHeight(148),
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: colors.whitebox,
    alignItems: "center",
    justifyContent: "space-around",
  },
  MyPagePrevillageTitletext: {
    width: getWidth(127),
    height: getHeight(24),
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -1.2,
    textAlign: "center",
    fontFamily: fonts.Medium,
    color: colors.textblack,
  },
  MyPagePrevillageSubTitletext: {
    width: getWidth(105),
    height: getHeight(15),
    fontSize: 10,
    lineHeight: 20,
    letterSpacing: -0.75,
    marginBottom: -10,
    textAlign: "center",
    fontFamily: fonts.Medium,
    color: colors.textblack,
  },
  MyPageButtonArea: {
    width: getWidth(316),
    height: getHeight(38),
    borderRadius: 8,
    backgroundColor: colors.yellow,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  MyPageButtonAreaText: {
    width: getWidth(116),
    height: getHeight(18),
    fontSize: 12,
    letterSpacing: -0.9,
    lineHeight: 16,
    fontWeight: "bold",
    color: colors.white,
    fontFamily: fonts.Medium,
    textAlign: "center",
  },
  MyPageTouchableArea: {
    marginTop: 10,
    borderRadius: 10,
    alignItems: "center",
  },
});

const MyPage = () => {
  return (
    <View style={styles.MyPageContainer}>
      <TouchableOpacity style={styles.MyPageTouchableArea}>
        <View style={styles.MyPageTopIconArea}>
          <Text style={styles.MyPageUserIcon}></Text>
          <Text style={styles.MyPageUserTitletext}>USER</Text>
          <Text style={styles.MyPageUserPointtext}>200P</Text>
        </View>
        <View style={styles.MyPagePrevillageContainer}>
          <Text style={styles.MyPagePrevillageTitletext}>
            화개 멤버 전용 혜택
          </Text>
          <Text style={styles.MyPagePrevillageSubTitletext}>
            모든 상품 100% 무료배송
          </Text>
          <Text style={styles.MyPagePrevillageSubTitletext}>
            5% 포인트 적립
          </Text>
          <View style={styles.MyPageButtonArea}>
            <Text style={styles.MyPageButtonAreaText}>
              지금 무료체험 신청하기{" "}
            </Text>
          </View>
        </View>
        <RenderMyPageMenu menu="찜한가게" route="DibsMarket" />
        <RenderMyPageMenu menu="주문목록" route="OrderList" />
        <RenderMyPageMenu menu="화개 멤버십" route="DibsMarket" />
      </TouchableOpacity>
    </View>
  );
};

export default MyPage;
