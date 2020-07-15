import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, fonts } from "../../../constants";
import { getHeight, getWidth } from "../../../utils/helper";
import { RenderBasketItems } from "../../../components";

const styles = StyleSheet.create({
  BasketPageContainer: {
    flex: 1,
  },
  BasketPageHeader: {
    width: getWidth(375),
    height: getHeight(87.4),
    borderBottomWidth: 0.5,
    borderBottomColor: colors.grey,
  },
  BasketPageHeaderText: {
    fontSize: 24,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 36,
    letterSpacing: -1.8,
    fontFamily: fonts.Medium,
    color: colors.black65,
    marginTop: 33,
    marginLeft: 16,
  },
  BasketPageRenderBasketItemsContainer: {
    flex: 1,
  },
});

const BasketPage = () => {
  const [basketItems, setBasketItems] = React.useState([
    {
      categoryName: "마트",
      items: [
        { name: "순이네", categoryName: "마트", price: "53,300", amount: 6 },
        { name: "털보네", categoryName: "마트", price: "53,300", amount: 6 },
      ],
    },
    {
      categoryName: "네일아트",
      items: [
        {
          name: "수연이네",
          categoryName: "네일아트",
          price: "53,300",
          amount: 6,
        },
        {
          name: "민지네",
          categoryName: "네일아트",
          price: "53,300",
          amount: 6,
        },
      ],
    },
    {
      categoryName: "정육점",
      items: [
        {
          name: "수연이네",
          categoryName: "정육점",
          price: "53,300",
          amount: 6,
        },
        {
          name: "민지네",
          categoryName: "정육점",
          price: "53,300",
          amount: 6,
        },
      ],
    },
  ]);
  return (
    <View style={styles.BasketPageContainer}>
      <View style={styles.BasketPageHeader}>
        <Text style={styles.BasketPageHeaderText}>장바구니</Text>
      </View>
      <View style={styles.BasketPageRenderBasketItemsContainer}>
        <RenderBasketItems basketItems={basketItems} />
      </View>
    </View>
  );
};

export default BasketPage;
