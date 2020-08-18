import * as React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { colors, fonts } from "../../constants";
import { getHeight, getWidth } from "../../utils/helper";
import OrderListCardDtl from "../OrderListCardDtl";
const styles = StyleSheet.create({
  RenderOrderListDtlCategoryText: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: -1.2,
    fontFamily: fonts.Medium,
    color: colors.black65,
  },
  RenderOrderListDtlCategoryFlatlist: {
    marginTop: 14.6,
    paddingBottom: 24.6,
  },
  RenderOrderListDtlFlatlistContainer: {
    marginTop: -30,
  },
});

const RenderOrderListDtl = ({ basketItems }) => {
  const renderItem = React.useCallback(({ item }) => {
    return <OrderListCardDtl item={item} />;
  }, []);
  return (
    <FlatList
      data={ShoppingGoodsBundles}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.RenderOrderListDtlCategoryFlatlist}
    />
  );
};

export default RenderOrderListDtl;
