import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, fonts } from "../../../constants";
import { getHeight, getWidth } from "../../../utils/helper";
import { RenderBasketItems, Header } from "../../../components";
import { URL_GET_CART_LIST } from "@constants/api";
import { basketListUpdate } from "@actions/user/index";
import { useSelector, useDispatch, useStore } from "react-redux";
import request from "../../../constants/request";

const styles = StyleSheet.create({
  BasketPageContainer: {
    flex: 1,
  },
  BasketPageHeader: {
    width: getWidth(375),
    height: getHeight(87.4),
    backgroundColor: colors.yellow129,
  },
  BasketPageHeaderText: {
    fontSize: 17,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 36,
    letterSpacing: -1.8,
    fontFamily: fonts.Medium,
    color: colors.white8,
    marginTop: 40,
    marginLeft: 16,
  },
  BasketPageRenderBasketItemsContainer: {
    flex: 1,
  },
});

const BasketPage = ({ navigation }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [basketItems, setBasketItems] = React.useState([]);

  // 포커싱 감지하여 리렌더
  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getMyCartList();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  React.useEffect(() => {
    getMyCartList(user.userId);
  }, []);

  // 내 장바구니 리스트 가져오기
  const getMyCartList = async (userId) => {
    try {
      const res = await request.get(URL_GET_CART_LIST(userId), {});

      if (res.status === 200) {
        dispatch(basketListUpdate(res.data));

        // 쇼핑카트에 아이템이 들어있을 경우
        if (res.data.ShoppingCarts.length > 0) {
          // 아이템 맵
          let basketItemsMap = new Map();

          res.data.ShoppingCarts.map((cart) => {
            let { Market, ShoppingGoodsBundles } = cart;

            // 물건 총 수량 계산
            let accumulator = 0;
            for (const goodsBundle of ShoppingGoodsBundles) {
              accumulator += goodsBundle.goodsBundleQuantity;
            }

            // 해당 마켓 카테고리가 이미 맵에 존재하면 아이템을 더해준다.
            if (basketItemsMap.get(Market.marketCategory)) {
              let items = basketItemsMap.get(Market.marketCategory);
              items.push({
                name: Market.marketName,
                marketPhoto: Market.marketPhoto,
                price: cart.totalAmount,
                MarketId: cart.MarketId,
                amount: accumulator,
                categoryName: Market.marketCategory,
                shoppingGoodsBundles: ShoppingGoodsBundles,
              });

              basketItemsMap.set(Market.marketCategory, items);
            } else {
              let items = new Array({
                name: Market.marketName,
                marketPhoto: Market.marketPhoto,
                price: cart.totalAmount,
                MarketId: cart.MarketId,
                amount: accumulator,
                categoryName: Market.marketCategory,
                shoppingGoodsBundles: ShoppingGoodsBundles,
              });
              basketItemsMap.set(Market.marketCategory, items);
            }
          });

          let basketItemList = [];

          Array.from(basketItemsMap).map((value) => {
            let item_bundle = {
              categoryName: value[0],
              items: value[1],
            };
            basketItemList.push(item_bundle);
          });

          setBasketItems(basketItemList);
        } else {
          setBasketItems(null);
        }
      }
    } catch (error) {
      console.log(error);
      console.error(error);
    }
  };

  return (
    <View style={styles.BasketPageContainer}>
      <Header>장바구니</Header>
      <View style={styles.BasketPageRenderBasketItemsContainer}>
        <RenderBasketItems basketItems={basketItems} />
      </View>
    </View>
  );
};

export default BasketPage;
