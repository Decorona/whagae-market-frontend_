import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { StoreDetailItemCard } from "../../components";
const styles = StyleSheet.create({
  RenderStoreDetailItemsContainer: {
    // flex: 1,
    marginTop: 8,
  },
});

const RenderStoreDetailItems = ({ items }) => {
  const renderItem = React.useCallback(({ item }) => {
    return <StoreDetailItemCard />;
  }, []);
  return (
    <View style={styles.RenderStoreDetailItemsContainer}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
      <StoreDetailItemCard />
    </View>
  );
};

export default RenderStoreDetailItems;
