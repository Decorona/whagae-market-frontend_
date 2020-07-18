import * as React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { getWidth, getHeight } from "../../utils/helper";
import { colors, fonts } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch, useStore } from "react-redux";
const styles = StyleSheet.create({
  RenderItemsComponentsContainer: {
    paddingHorizontal: 11,
    paddingTop: 17.5,
    flex: 1,
  },
  RenderItemsComponentsEmpty: {
    flex: 1,
  },
  RenderItemsComponentsFlatList: {
    flexDirection: "column",
  },
  RenderItemsComponentsItemContainer: {
    width: getWidth(166),
    height: getHeight(256),
    marginLeft: 5,
    marginRight: 5,
  },
  RenderItemsComponentsItemImage: {
    backgroundColor: colors.lightgrey,
    width: getWidth(166),
    height: getHeight(166),
  },
  RenderItemsComponentsItemInfoContainer: {},
  RenderItemsComponentsItemTitleAndScoreContainer: {
    flexDirection: "row",
  },
  RenderItemsComponentsItemTitle: {
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: -1.2,
    fontFamily: fonts.Medium,
    color: colors.grey,
  },
  RenderItemsComponentsItemScoreText: {
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -1.05,
    fontFamily: fonts.Medium,
    color: colors.grey,
    alignSelf: "center",
    marginLeft: 3,
  },
  RenderItemsComponentsItemScoreIcon: {
    width: 12,
    height: 12,
    backgroundColor: "red",
    alignSelf: "center",
  },
  RenderItemsComponentsItemReviewAndCommentContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    paddingBottom: 6.8,
  },
  RenderItemsComponentsItemReviewText: {
    fontSize: 8,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 12,
    letterSpacing: -0.6,
    color: colors.grey,
    alignSelf: "center",
    fontFamily: fonts.Medium,
  },
  RenderItemsComponentsItemCommentText: {
    fontSize: 8,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 12,
    letterSpacing: -0.6,
    color: colors.grey,
    alignSelf: "center",
    marginLeft: 3,
    fontFamily: fonts.Medium,
  },
  RenderItemsComponentsItemDeliveryContainer: {
    flexDirection: "row",
    paddingTop: 4.2,
  },
  RenderItemsComponentsItemDeliveryFeeText: {
    fontSize: 8,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 12,
    letterSpacing: -0.6,
    color: colors.grey,
    fontFamily: fonts.Medium,
  },
  RenderItemsComponentsItemDeliveryTimeText: {
    fontSize: 8,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 12,
    letterSpacing: -0.6,
    color: colors.grey,
    fontFamily: fonts.Medium,
  },
});

const RenderItemsComponents = ({ stores }) => {
  const navigation = useNavigation();
  const appStatus = useSelector((state) => state.appStatus);
  const dispatch = useDispatch();
  const renderItems = React.useCallback(({ item }) => {
    return (
      <TouchableOpacity
        style={styles.RenderItemsComponentsItemContainer}
        onPress={() => navigation.navigate("StoreDetail")}
      >
        <View style={styles.RenderItemsComponentsItemImage} />
        <View>
          <View style={styles.RenderItemsComponentsItemTitleAndScoreContainer}>
            <Text style={styles.RenderItemsComponentsItemTitle}>
              {item.marketName}
            </Text>
            <View style={styles.RenderItemsComponentsEmpty}></View>
            <View style={styles.RenderItemsComponentsItemScoreIcon}></View>
            <Text style={styles.RenderItemsComponentsItemScoreText}>
              {item.marketStarPoint}
            </Text>
          </View>
          <View
            style={styles.RenderItemsComponentsItemReviewAndCommentContainer}
          >
            <Text style={styles.RenderItemsComponentsItemReviewText}>
              최근리뷰 10+
            </Text>
            {/* <Text style={styles.RenderItemsComponentsItemCommentText}>
              최근사장님댓글 10+
            </Text> */}
          </View>
          <View style={styles.RenderItemsComponentsItemDeliveryContainer}>
            <Text style={styles.RenderItemsComponentsItemDeliveryTimeText}>
              배달비 0원
            </Text>
            <View style={styles.RenderItemsComponentsEmpty} />
            <Text style={styles.RenderItemsComponentsItemDeliveryTimeText}>
              40~50분
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }, []);
  return (
    <View style={styles.RenderItemsComponentsContainer}>
      <FlatList
        data={appStatus.stores}
        renderItem={renderItems}
        contentContainerStyle={styles.RenderItemsComponentsFlatList}
        keyExtractor={(item) => item.name}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default RenderItemsComponents;
