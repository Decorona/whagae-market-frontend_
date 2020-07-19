import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { ReviewCard } from "../../components";
import { useSelector } from "react-redux";
const styles = StyleSheet.create({
  RenderReviewCardsContainer: {
    paddingTop: 5,
    flex: 1,
  },
});

const RenderReviewCards = () => {
  const appStatus = useSelector((state) => state.appStatus);
  const renderItems = React.useCallback(({ item }) => {
    return <ReviewCard review={item} />;
  }, []);
  return (
    <View style={styles.RenderReviewCardsContainer}>
      <FlatList
        data={appStatus.storeReviews}
        renderItem={renderItems}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default RenderReviewCards;
