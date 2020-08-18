import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, fonts } from "../../../constants";
import { CategoryMenu, RenderMarketTheme } from "../../../components";

const styles = StyleSheet.create({
  MarketPageContainer: {
    flex: 1,
  },
  MarketPageTitleAndDayContainer: {
    height: 35,
    paddingTop: 10,
    paddingBottom: 5.4,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.white,
    flexDirection: "row",
    justifyContent: "center",
  },
  MarketPageTitletext: {
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -0.28,
    fontFamily: fonts.Medium,
    color: colors.yellow,
  },
  MarketPageTopbar: {
    backgroundColor: colors.whitebox,
  },
  MarketPageDayText: {
    position: "absolute",
    right: 18,
    top: 9,
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -0.28,
    fontFamily: fonts.Medium,
    color: colors.yellow,
  },
});

const MarketPage = () => {
  const [storeCategory, setStoreCategory] = React.useState([
    { name: "전체" },
    { name: "마트" },
    { name: "미용실" },
    { name: "네일아트" },
    { name: "의류" },
    { name: "안경점" },
    { name: "세탁소" },
    { name: "꽃집" },
    { name: "철물점" },
  ]);
  const [storeTheme, setStoreTheme] = React.useState([
    [
      { theme: "우리동네 솜씨좋은 네일, 헤어샵들!" },

      { stores: [{ name: "반짝반짝 네일샵" }, { name: "리안 헤어샵" }] },
    ],
    [
      { theme: "우리동네 맛있는 먹거리 총 집합!" },

      {
        stores: [
          { name: "정한 분식" },
          { name: "황금돼지 떡볶이" },
          { name: "한결 타로" },
          { name: "헤어 마스터" },
        ],
      },
    ],
    [
      { theme: "소중한 사람에게 꽃다발 하나 어때요?" },

      {
        stores: [
          { name: "싱그러운 꽃집" },
          { name: "베르사유 꽃집" },
          { name: "다보여 안경" },
          { name: "엔젤핵 뽑기" },
        ],
      },
    ],
  ]);
  return (
    <View style={styles.MarketPageContainer}>
      <View style={styles.MarketPageTopbar}>
        <Text style={styles.MarketPageDayText}>D-5</Text>
        <View style={styles.MarketPageTitleAndDayContainer}>
          <Text style={styles.MarketPageTitletext}>화개장터</Text>
        </View>
      </View>
      <CategoryMenu category={storeCategory} />
      <RenderMarketTheme theme={storeTheme} />
    </View>
  );
};

export default MarketPage;
