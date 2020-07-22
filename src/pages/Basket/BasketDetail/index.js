import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { colors, fonts } from "../../../constants";
import { useNavigation } from "@react-navigation/native";
import { getHeight, getWidth } from "../../../utils/helper";
import { icons } from "../../../assets";
import { Header, LongBottomButton } from "@components/index";

const styles = StyleSheet.create({
  BasketContainer: {
    width: "100%",
    flex: 1,
  },
  BasketDetailContainer: {
    width: getWidth(342),
    height: getHeight(150),
    borderRadius: 3,
    backgroundColor: colors.greyf7,
    alignSelf: "center",
    marginTop: 20,
  },
  BasketDetailNameAndCategoryContainer: {
    padding: 10,
  },
  ProductNameLine: {
    paddingTop: 5,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  PriceQuantityLine: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  TotalPriceLine: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ProductName: {
    lineHeight: 29,
    letterSpacing: -1.5,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: fonts.Medium,
    color: colors.gray3,
  },
  OrderDate: {
    lineHeight: 15,
    letterSpacing: -0.75,
    fontSize: 10,
    color: colors.grey89,
  },
  BasicPrice: {
    lineHeight: 18,
    letterSpacing: -0.9,
    fontSize: 14,
    fontFamily: fonts.Bold,
    color: colors.grey89,
  },
  Price: {
    lineHeight: 24,
    fontWeight: "bold",
    letterSpacing: -1.2,
    fontSize: 16,
    color: colors.grey89,
  },
  Amount: {
    lineHeight: 24,
    fontWeight: "bold",
    letterSpacing: -1.2,
    fontSize: 16,
    color: colors.black,
  },
  Total: {
    lineHeight: 20,
    letterSpacing: -1.05,
    fontFamily: fonts.Bold,
    fontSize: 16,
    color: colors.gray3,
  },
  TotalPrice: {
    lineHeight: 24,
    fontWeight: "bold",
    letterSpacing: -1.2,
    fontSize: 18,
    color: colors.gray3,
  },
  HorizntalLine: {
    marginTop: 5,
    borderBottomWidth: 2,
    borderBottomColor: "#efb129",
  },
  BasketPageHeader: {
    width: getWidth(375),
    height: getHeight(75.4),
    backgroundColor: colors.yellow129,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 25,
  },
});

const BasketDetail = ({ route }) => {
  const { MarketId } = route.params;

  const navigation = useNavigation();

  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    setMyBasketDetail();
  }, []);

  const setMyBasketDetail = () => {
    // 굿즈 번들 리스트
    console.log(route.params.bundleList);
    let items = route.params.bundleList.map((bundle) => {
      const { Good, GoodsOption } = bundle;
      return {
        goodsBundleId: bundle.id,
        name: Good.goodsName,
        options: GoodsOption,
        goodsPrice: Good.price,
        shoppingCartId: bundle.ShoppingCartId,
        goodsBundlePaymentTotal: bundle.goodsBundlePaymentTotal, // 굿즈 번들 토탈 금액 = 상품 + 옵션가 * 수량
        goodsBundleQuantity: bundle.goodsBundleQuantity, // 상품 수량
      };
    });

    setItems(items);
  };

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.BasketDetailContainer}>
        <View style={styles.BasketDetailNameAndCategoryContainer}>
          <View style={styles.ProductNameLine}>
            <Text style={styles.ProductName}>{item.name}</Text>
            <Text style={styles.OrderDate}>delete</Text>
          </View>
          <Text style={styles.BasicPrice}>기본: {item.goodsPrice}원</Text>
          <Text style={styles.BasicPrice}>
            추가옵션:{" "}
            {item.options
              ? Array.isArray(item.options)
                ? item.options.map((option) => {
                    return `${option.optionsName}: ${option.optionPrice}원 /`;
                  })
                : `${item.options.optionsName}: ${item.options.optionPrice}원`
              : null}
          </Text>
          <View style={styles.PriceQuantityLine}>
            <Text style={styles.Price}></Text>
            <Text style={styles.Amount}>
              수량: {item.goodsBundleQuantity} 개
            </Text>
          </View>
          <View style={styles.HorizntalLine} />
          <View style={styles.TotalPriceLine}>
            <Text style={styles.Total}>합계</Text>
            <Text style={styles.TotalPrice}>
              {item.goodsBundlePaymentTotal}원
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.BasketContainer}>
      <Header>물품 상세 리스트</Header>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
      />
      <LongBottomButton
        onPress={() => {
          navigation.navigate("Payment", {
            items: items,
            MarketId: MarketId,
          });
        }}
      >
        구매하기
      </LongBottomButton>
    </View>
  );
};

export default BasketDetail;
