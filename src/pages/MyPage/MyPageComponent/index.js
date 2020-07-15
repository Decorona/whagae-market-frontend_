import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, fonts } from "../../../constants";
import MyPageButton from "../../../components/MyPageButton";

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
    paddingBottom: 15,
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
    marginTop: 30,
  },
  preVillage: {
    flex: 0.5,
    paddingTop: 20,
    width: 300,
    borderWidth: 0.1,
    marginBottom: 25,
    backgroundColor: colors.greyf0,
  },
  UserIcon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: colors.greyb5,
    marginLeft: 6,
    marginTop: 5.5,
  },
});

const MyPage = () => {
  return (
    <View style={styles.MyPageContainer}>
      <View style={styles.MyPageContainerUp}>
        <View style={styles.UserProfileArea}>
          <Text style={styles.UserIcon}></Text>
          <Text style={styles.MyPageUserTitletext}>USER</Text>
        </View>
        <View style={styles.preVillage}>
          <Text style={styles.MyPageTitletext}>화개멤버 전용 혜택</Text>
          <Text style={styles.MyPageSubTitletext}>모든 상품 100%무료배송</Text>
          <Text style={styles.MyPageSubTitletext}>5% 포인트 적립</Text>
          <MyPageButton title={"지금 무료체험 신청하기"} />
        </View>
      </View>
      <View style={styles.MyPageContainerDown}>
        <MyPageButton title={"찜한가게"} />
        <MyPageButton title={"주문목록"} />
        <MyPageButton title={"화개 멤버십"} />
        <MyPageButton title={"구매후기"} />
        <MyPageButton title={"고객센터"} />
      </View>
    </View>
  );
};

export default MyPage;
