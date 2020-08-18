import * as React from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { colors, fonts } from "../../../constants";
import { getHeight, getWidth } from "../../../utils/helper";
import { icons } from "../../../assets";
import { useNavigation } from "@react-navigation/native";
import RenderOrderListDtl from "../../../components/RenderOrderListDtl";
import { LongBottomButton } from "../../../components";

const styles = StyleSheet.create({
  OrderListDtlContainer: {
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
  OrderListDtlTopText: {
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -0.28,
    fontFamily: fonts.Medium,
    color: colors.whitebox,
    marginLeft: 21,
    alignSelf: "center",
  },
});

const OrderListDtl = () => {
  const navigation = useNavigation();
  const [itemAmount, setItemAmount] = React.useState(1);
  const [itemTotalPrice, setItemTotalPrice] = React.useState("90,000");
  const [basketItems, setBasketItems] = React.useState([
    {
      items: [
        { name: "순이네", price: "45,000", amount: 2 },
        { name: "털보네", price: "45,000", amount: 2 },
      ],
    },
  ]);
  return (
    <View style={styles.OrderListDtlContainer}>
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
        <Text style={styles.OrderListDtlTopText}>주문 내역 상세</Text>
      </View>
      <RenderOrderListDtl basketItems={ShoppingGoodsBundles} />
    </View>
  );
};

export default OrderListDtl;
