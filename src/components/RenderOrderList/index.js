import * as React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { colors, fonts } from "../../constants";
import { getHeight, getWidth } from "../../utils/helper";
import OrderListCard from "../OrderListCard";
import { useSelector } from "react-redux";
const styles = StyleSheet.create({
  RenderOrderListCategoryText: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: -1.2,
    fontFamily: fonts.Medium,
    color: colors.grey8d,
  },
  RenderOrderListCategoryFlatlist: {
    marginTop: 14.6,
    paddingBottom: 24.6,
  },
  RenderOrderListFlatlistContainer: {
    marginTop: -30,
  },
});

const RenderOrderList = ({ basketItems }) => {
  const user = useSelector((state) => state.user);
  const renderItem = React.useCallback(({ item, index }) => {
    return <OrderListCard item={item} />;
  }, []);

  return (
    <FlatList
      data={basketItems}
      renderItem={renderItem}
      keyExtractor={(item) => item.categoryName}
      contentContainerStyle={styles.RenderOrderListCategoryFlatlist}
    />
  );
};

export default RenderOrderList;
