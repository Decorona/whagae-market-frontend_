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
  const renderCategory = React.useCallback(({ item }) => {
    return (
      <View style={styles.RenderOrderListDtlFlatlistContainer}>
        <Text style={styles.RenderOrderListDtlCategoryText}>
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
      contentContainerStyle={styles.RenderOrderListDtlCategoryFlatlist}
    />
  );
};

export default RenderOrderListDtl;
