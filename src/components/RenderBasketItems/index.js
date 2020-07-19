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
    fontFamily: fonts.Bold,
    color: colors.gray3,
  },
  RenderBasketItemsCategoryFlatlist: {
    marginTop: 14.6,
    paddingBottom: 24.6,
  },
  RenderBasketItemsFlatlistContainer: {
    marginTop: 10,
  },
});

const marketCategory = {
  mart: "마트",
  hairshop: "헤어샵",
  hardware_store: "철물점",
  flowershop: "꽃집",
  nail_art: "네일아트",
  dress: "옷",
  glasses: "안경점",
  cleaning: "세탁소",
};

const RenderBasketItems = ({ basketItems }) => {
  const renderItem = React.useCallback(({ item, index }) => {
    return <BasketItemCard item={item} key={`${item.name}${index}`} />;
  }, []);

  const renderCategory = React.useCallback(({ item, index }) => {
    return (
      <View
        style={styles.RenderBasketItemsFlatlistContainer}
        key={`${item.categoryName}${index}`}
      >
        <Text style={styles.RenderBasketItemsCategoryText}>
          {marketCategory[item.categoryName]}
        </Text>
        <FlatList
          data={item.items}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }, []);

  return (
    <FlatList
      data={basketItems}
      renderItem={renderCategory}
      keyExtractor={(item, index) => `${item.categoryName}${index}`}
      contentContainerStyle={styles.RenderBasketItemsCategoryFlatlist}
    />
  );
};

export default RenderBasketItems;
