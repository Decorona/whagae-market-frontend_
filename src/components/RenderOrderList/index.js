import * as React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { colors, fonts } from "../../constants";
import { getHeight, getWidth } from "../../utils/helper";
import OrderListCard from "../OrderListCard";
const styles = StyleSheet.create({
  RenderOrderListCategoryText: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: -1.2,
    fontFamily: fonts.Medium,
    color: colors.black65,
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
  const renderItem = React.useCallback(({ item }) => {
    return <OrderListCard item={item} />;
  }, []);
  const renderCategory = React.useCallback(({ item }) => {
    return (
      <View style={styles.RenderOrderListFlatlistContainer}>
        <Text style={styles.RenderOrderListCategoryText}>
          {item.categoryName}
        </Text>
        <FlatList
          data={item.items}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
      </View>
    );
  }, []);
  return (
    <FlatList
      data={basketItems}
      renderItem={renderCategory}
      keyExtractor={(item) => item.categoryName}
      contentContainerStyle={styles.RenderOrderListCategoryFlatlist}
    />
  );
};

export default RenderOrderList;