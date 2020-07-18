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
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
  RenderStoreDetailItemsContainer: {
    // flex: 1,
    marginTop: 8,
  },
});

const RenderStoreDetailItems = ({}) => {
  const appStatus = useSelector((state) => state.appStatus);

  const renderItem = React.useCallback(({ item }) => {
    return <StoreDetailItemCard item={item} />;
  }, []);
  return (
    <View style={styles.RenderStoreDetailItemsContainer}>
      <FlatList
        data={appStatus.storeItems.Goods}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

export default RenderStoreDetailItems;
