import * as React from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { CategoryMenu } from "../../../components";
import { colors, fonts } from "../../../constants";
import { getHeight, getWidth } from "../../../utils/helper";
import { icons } from "../../../assets";
import { useNavigation } from "@react-navigation/native";
import RenderOrderList from "../../../components/RenderOrderList";

const styles = StyleSheet.create({
  OrderListContainer: {
    flex: 1,
    backgroundColor: colors.greyef,
  },
  StoreDetailGobackAndDibButtonContainer: {
    height: getHeight(61),
    backgroundColor: colors.yellow,
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
  OrderListTopText: {
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -0.28,
    fontFamily: fonts.Medium,
    color: colors.greyf8,
    marginLeft: 21,
    alignSelf: "center",
  },
});

const OrderList = () => {
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
  const [basketItems, setBasketItems] = React.useState([
    {
      items: [
        { name: "순이네", categoryName: "마트", amount: 6 },
        { name: "털보네", categoryName: "마트", amount: 6 },
      ],
    },
  ]);
  return (
    <View style={styles.OrderListContainer}>
      <View style={styles.StoreDetailGobackAndDibButtonContainer}>
        <TouchableOpacity
          style={styles.StoreDetailGobackbuttonContainer}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={icons.leftArrowWhite}
            style={styles.StoreDetailGobackbutton}
          />
        </TouchableOpacity>
        <Text style={styles.OrderListTopText}>주문 내역</Text>
      </View>

      <CategoryMenu category={storeCategory} />
      <RenderOrderList basketItems={basketItems} />
    </View>
  );
};

export default OrderList;
