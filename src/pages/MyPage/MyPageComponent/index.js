import * as React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors, fonts } from "../../../constants";
import MyPageButton from "../../../components/MyPageButton";
import RenderMyPageMenu from "../../../components/RenderMyPageMenu";

const styles = StyleSheet.create({
  MyPageContainer: {
    flex: 1,
  },
  MyPageContainerUp: {
    flex: 0.5,
    height: 35,
    paddingTop: 10,
    paddingBottom: 5.4,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.grey,
    justifyContent: "center",
    alignItems: "center",
  },
  MyPageContainerDown: {
    flex: 0.5,
  },
  MyPageUserTitletext: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: -1.05,
    textAlign: "center",
    fontFamily: fonts.Medium,
    color: colors.grey,
  },
  MyPageUserPointtext: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: "bold",
    lineHeight: 18,
    marginBottom: 20,
    borderBottomColor: colors.grey,
  },
  MyPageUserTitletext: {
    fontSize: 18,
    fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: -1.05,
    textAlign: "center",
    fontFamily: fonts.Medium,
    color: colors.grey,
  },
  MyPageTitletext: {
    fontSize: 18,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -1.05,
    textAlign: "center",
    paddingBottom: 10,
    fontFamily: fonts.Medium,
    color: colors.grey,
  },
  MyPageSubTitletext: {
    fontSize: 10,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -1.05,
    textAlign: "center",
    fontFamily: fonts.Medium,
    color: colors.grey,
  },
  MyPageDayText: {
    position: "absolute",
    right: 18,
    top: 9,
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -0.28,
    fontFamily: fonts.Medium,
    color: colors.grey,
  },
  UserProfileArea: {
    flex: 0.5,
    justifyContent: "center",
  },
  preVillage: {
    flex: 0.5,
    paddingTop: 20,

    width: 332,
    marginTop: 10,
    marginBottom: 25,
    borderRadius: 10,
    backgroundColor: colors.greyeb,
  },
  UserIcon: {
    width: 48,
    height: 48,
    borderRadius: 29,
    backgroundColor: colors.greyb5,
    marginTop: 5.5,
  },
  ButtonArea: {
    marginBottom: 10,
    paddingTop: 10,
  },
  ButtonAreaText: {
    fontSize: 12,
    letterSpacing: 0.9,
    lineHeight: 24,
    fontWeight: "bold",
    color: colors.grey,
    fontFamily: fonts.Medium,
    textAlign: "center",
  },
  TouchableArea: {
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: colors.greye0,
    justifyContent: "center",
  },
});

const MyPage = () => {
  return (
    <View style={styles.MyPageContainer}>
      <View style={styles.MyPageContainerUp}>
        <View style={styles.UserProfileArea}>
          <Text style={styles.UserIcon}></Text>
          <Text style={styles.MyPageUserTitletext}>USER</Text>
          <Text style={styles.MyPageUserPointtext}>200P</Text>
        </View>
        <View style={styles.preVillage}>
          <Text style={styles.MyPageTitletext}>화개 멤버 전용 혜택</Text>
          <Text style={styles.MyPageSubTitletext}>모든 상품 100% 무료배송</Text>
          <Text style={styles.MyPageSubTitletext}>5% 포인트 적립</Text>
          <TouchableOpacity style={styles.TouchableArea}>
            <View style={styles.ButtonArea}>
              <Text style={styles.ButtonAreaText}>지금 무료체험 신청하기 </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.MyPageContainerDown}>
        <RenderMyPageMenu menu="찜한가게" route="DibsMarket" />
        <RenderMyPageMenu menu="주문목록" route="DibsMarket" />
        <RenderMyPageMenu menu="화개 멤버십" route="DibsMarket" />
      </View>
    </View>
  );
};

export default MyPage;
