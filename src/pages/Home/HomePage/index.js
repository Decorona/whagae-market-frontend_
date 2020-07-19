import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors, fonts } from "../../../constants";
import { URL_GET_REGIONAL_MARKET } from "../../../constants/api";
import {
  Banners,
  RenderItemsComponents,
  CategoryMenu,
} from "../../../components";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch, useStore } from "react-redux";
import { storesUpdate } from "../../../actions/appStatus";
import axios from "axios";
import { icons } from "../../../assets";
const styles = StyleSheet.create({
  HomePageContainer: {
    flex: 1,
  },
  HomePageUserLocationNameContainer: {
    height: 35,
    paddingTop: 10,
    paddingBottom: 5.4,
    borderBottomWidth: 0.5,
    backgroundColor: colors.greyf8,
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
  // redux store 내용으로 교체예정
  const [stores, setStores] = React.useState([
    { marketName: "순이네", marketStarPoint: 4, MarketReviews: [], id: 1 },
    // { name: "점순이네" },
    // { name: "털보네" },
    // { name: "돌쇠네" },
    // { name: "초삼이네" },
    // { name: "돌석이네" },
  ]);
  //
  // useSelector : redux store내 state를 사용할 수 있게 해줌
  // dispatch : redux에 정의한 함수를 사용할 수 있게 해줌
  // redux내 함수 정의 방법은 actions, reducer 폴더에서 확인 바람
  const appStatus = useSelector((state) => state.appStatus);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [banners, setBanners] = React.useState([
    { image: icons.banner },
    { image: icons.banner },
    { image: icons.banner },
  ]);

  // api 통신(현재 마포구 기준), api는 따로 정리해두기
  const _getStores = async () => {
    try {
      // const res = await axios.get(
      //   URL_GET_REGIONAL_MARKET(user.location.key),
      //   {}
      // );
      const res = await axios.get(URL_GET_REGIONAL_MARKET("마포구"), {});
      if (res.status === 200) {
        dispatch(storesUpdate(res.data));
      }
    } catch (error) {
      console.log(error);
      console.error(error);
    }
  };

  React.useEffect(() => {
    _getStores();
  }, []);

  return (
    <View style={styles.HomePageContainer}>
      <TouchableOpacity
        style={styles.HomePageUserLocationNameContainer}
        onPress={() => {
          navigation.navigate("SetAddress");
        }}
      >
        <Text style={styles.HomePageUserlocationNameText}>
          {user.location.display}
        </Text>
      </TouchableOpacity>
      <CategoryMenu category={storeCategory} />
      <Banners banners={banners} />
      <RenderItemsComponents store={stores} />
    </View>
  );
};

export default HomePage;
