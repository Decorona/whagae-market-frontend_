import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { colors, fonts } from "../../../constants";
import {
  URL_GET_REGIONAL_MARKET,
  URL_GET_ORDER_LIST,
} from "../../../constants/api";
import {
  Banners,
  RenderItemsComponents,
  CategoryMenu,
} from "../../../components";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch, useStore } from "react-redux";
import { storesUpdate } from "../../../actions/appStatus";
//유저 관련
import { userIdUpdate, orderListUpdate } from "../../../actions/user";
import axios from "axios";
import { icons } from "../../../assets";
import { getWidth, getHeight } from "../../../utils/helper";
const styles = StyleSheet.create({
  HomePageContainer: {
    flex: 1,
    backgroundColor: colors.greyef,
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
  checkedOption: {
    marginLeft: 5,
    borderRadius: 9,
    width: 18,
    height: 18,
    alignSelf: "center",
  },
  HomePageUserlocationContainer: {
    width: getWidth(375),
    height: getHeight(35),
    padding: 20,
    borderBottomColor: colors.grey,
    justifyContent: "center",
    flexDirection: "row",
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

  //
  // useSelector : redux store내 state를 사용할 수 있게 해줌
  // dispatch : redux에 정의한 함수를 사용할 수 있게 해줌
  // redux내 함수 정의 방법은 actions, reducer 폴더에서 확인 바람
  const appStatus = useSelector((state) => state.appStatus);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [homeStores, setHomeStores] = React.useState([]);

  const [banners, setBanners] = React.useState([
    { image: icons.banner },
    { image: icons.banner },
    { image: icons.banner },
  ]);
  const _getStores = async () => {
    try {
      const res = await axios.get(
        URL_GET_REGIONAL_MARKET(user.location.key),
        {}
      );
      if (res.status === 200) {
        dispatch(storesUpdate(res.data));
        setHomeStores(res.data);
      }
    } catch (error) {
      console.log(error);
      console.error(error);
    }
  };

  const _getOrderList = async () => {
    try {
      const res = await axios.get(URL_GET_ORDER_LIST(user.userId), {});
      if (res.status === 200) {
        dispatch(orderListUpdate(res.data));
      }
    } catch (error) {
      console.log(error);
      console.error(error);
    }
  };
  //

  React.useEffect(() => {
    _getStores();
    _getOrderList();
  }, []);

  return (
    <View style={styles.HomePageContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SetAddress");
        }}
      >
        <View style={styles.HomePageUserlocationContainer}>
          <Text style={styles.HomePageUserlocationNameText}>
            {user.location.display}
          </Text>
          <Image source={icons.checked} style={styles.checkedOption}></Image>
        </View>
      </TouchableOpacity>
      <CategoryMenu
        category={storeCategory}
        setStore={setHomeStores}
        entire={appStatus.stores}
      />
      <Banners banners={banners} />
      <RenderItemsComponents stores={homeStores} />
    </View>
  );
};

export default HomePage;
