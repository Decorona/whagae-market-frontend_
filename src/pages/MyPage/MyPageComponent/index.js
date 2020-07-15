import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { colors, fonts } from "../../../constants";

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
  MyPageTitletext: {
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -1.05,
    textAlign: "center",
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
  userIcon: {
    flex: 0.5,
  },
  preVillage: {
    flex: 0.5,
  },
});

const MyPage = () => {
  const onPressButton = () => {
    alert("버튼클릭");
  };
  return (
    <View style={styles.MyPageContainer}>
      <View style={styles.MyPageContainerUp}>
        <View style={styles.userIcon}>
          <Text style={styles.MyPageTitletext}>USER</Text>
        </View>
        <View style={styles.preVillage}>
          <Text style={styles.MyPageTitletext}>화개멤버 전용 혜택</Text>
          <Text style={styles.MyPageSubTitletext}>모든 상품 100%무료배송</Text>
          <Text style={styles.MyPageSubTitletext}>5% 포인트 적립</Text>
          <Button
            onPress={onPressButton}
            title="지금 무료체험 신청하기"
            color="lightgray"
          />
        </View>
      </View>
      <View style={styles.MyPageContainerDown}>
        <Button onPress={onPressButton} title="찜한가게" color="lightgray" />
        <Button onPress={onPressButton} title="주문모곩" color="lightgray" />
        <Button onPress={onPressButton} title="화개 멤버십" color="lightgray" />
        <Button onPress={onPressButton} title="구매후기" color="lightgray" />
        <Button onPress={onPressButton} title="고객센터" color="lightgray" />
      </View>
    </View>
  );
};

export default MyPage;
