import * as React from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  SearchBar,
  RenderItemsComponents,
  CategoryMenu,
} from "../../../components";
import { colors, fonts } from "../../../constants";
import { getHeight, getWidth } from "../../../utils/helper";
import { icons } from "../../../assets";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  DibsMarketContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  StoreDetailGobackAndDibButtonContainer: {
    height: getHeight(61),
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
  },
  StoreDetailGobackbuttonContainer: {
    marginLeft: 16,
  },
  StoreDetailGobackbutton: {
    width: 14,
    height: 23.3,
  },
  TopText: {
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -0.28,
    fontFamily: fonts.Medium,
    color: colors.black65,
    marginLeft: 21,
    alignSelf: "center",
  },
});

const DibsMarket = () => {
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
  ]);
  return (
    <View style={styles.DibsMarketContainer}>
      <View style={styles.StoreDetailGobackAndDibButtonContainer}>
        <TouchableOpacity
          style={styles.StoreDetailGobackbuttonContainer}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={icons.leftArrowBlack}
            style={styles.StoreDetailGobackbutton}
          />
        </TouchableOpacity>
        <Text style={styles.TopText}>찜한가게</Text>
      </View>

      <CategoryMenu category={storeCategory} />
      <RenderItemsComponents stores={stores} />
    </View>
  );
};

export default DibsMarket;
