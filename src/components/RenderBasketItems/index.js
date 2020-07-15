import * as React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { colors, fonts } from "../../constants";
import { getHeight, getWidth } from "../../utils/helper";
import { BasketItemCard } from "../../components";
const styles = StyleSheet.create({
  RenderBasketItemsCategoryText: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: -1.2,
    fontFamily: fonts.Medium,
    color: colors.black65,
  },
  RenderBasketItemsCategoryFlatlist: {
    marginTop: 14.6,
    paddingBottom: 24.6,
  },
  RenderBasketItemsFlatlistContainer: {
    marginTop: 10,
  },
});

const RenderBasketItems = ({ basketItems }) => {
  const renderItem = React.useCallback(({ item }) => {
    return <BasketItemCard item={item} />;
  }, []);
  const renderCategory = React.useCallback(({ item }) => {
    return (
      <View style={styles.RenderBasketItemsFlatlistContainer}>
        <Text style={styles.RenderBasketItemsCategoryText}>
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
      contentContainerStyle={styles.RenderBasketItemsCategoryFlatlist}
    />
  );
};

export default RenderBasketItems;
