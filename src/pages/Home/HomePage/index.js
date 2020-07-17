import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors, fonts } from "../../../constants";
import {
  Banners,
  RenderItemsComponents,
  CategoryMenu,
} from "../../../components";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  HomePageContainer: {
    flex: 1,
  },
  HomePageUserLocationNameContainer: {
    height: 35,
    paddingTop: 10,
    paddingBottom: 5.4,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.grey,
  },
  HomePageUserlocationNameText: {
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -1.05,
    fontFamily: fonts.Medium,
    color: colors.grey,
    alignSelf: "center",
  },
});

const HomePage = () => {
  const navigation = useNavigation();
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
  const [stores, setStores] = React.useState([
    { name: "순이네" },
    { name: "점순이네" },
    { name: "털보네" },
    { name: "돌쇠네" },
    { name: "초삼이네" },
    { name: "돌석이네" },
  ]);

  const [banners, setBanners] = React.useState([
    { temp: 1 },
    { temp: 2 },
    { temp: 3 },
  ]);

  return (
    <View style={styles.HomePageContainer}>
      <TouchableOpacity
        style={styles.HomePageUserLocationNameContainer}
        onPress={() => {
          navigation.navigate("SetAddress");
        }}
      >
        <Text style={styles.HomePageUserlocationNameText}>
          서울 성북구 삼선동 1가
        </Text>
      </TouchableOpacity>
      <CategoryMenu category={storeCategory} />
      <Banners banners={banners} />
      <RenderItemsComponents stores={stores} />
    </View>
  );
};

export default HomePage;
