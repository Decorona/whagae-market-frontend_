import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { getWidth } from "../../utils/helper";
import { ReviewCard } from "../../components";

const styles = StyleSheet.create({
  RenderReviewCardsContainer: {
    paddingTop: 5,
    flex: 1,
  },
});

const RenderReviewCards = ({ reviews }) => {
  const renderItems = React.useCallback(({ item }) => {
    return <ReviewCard review={item} />;
  }, []);
  return (
    <View style={styles.RenderReviewCardsContainer}>
      <FlatList
        data={reviews}
        renderItem={renderItems}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default RenderReviewCards;