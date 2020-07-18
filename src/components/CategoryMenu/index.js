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
import { useSelector, useDispatch, useStore } from "react-redux";
import { storesUpdate } from "../../actions/appStatus";
const styles = StyleSheet.create({
  CategoryMenuName: {
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -1.05,
    fontFamily: fonts.Medium,
    color: colors.grey,
    marginLeft: 16,
  },
  CategoryMenuContainer: {
    height: 37.6,
    paddingTop: 8.6,
    paddingBottom: 9,
    borderBottomColor: colors.lightgrey1,
    borderBottomWidth: 0.5,
  },
});

const CategoryMenu = ({ category }) => {
  const appStatus = useSelector((state) => state.appStatus);
  const dispatch = useDispatch();
  const filterStore = React.useCallback((name) => {
    let category = "";
    switch (name) {
      case "전체":
        break;
      case "마트":
        category = "mart";
        break;
      case "미용실":
        category = "hairshop";
        break;
      case "네일아트":
        category = "nail_art";
        break;
      case "의류":
        category = "dress";
        break;
      case "안경점":
        category = "glasses";
        break;
      case "세탁소":
        category = "cleaning";
        break;
      case "꽃집":
        category = "flowershop";
        break;
    }
    if (category === "") {
    } else {
      let temp = appStatus.stores.filter(
        (store) => store.marketCategory === category
      );
      console.log(category);
      console.log(temp);
      dispatch(storesUpdate(temp));
    }
  }, []);
  const renderCategory = React.useCallback(({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          filterStore(item.name);
        }}
      >
        <Text style={styles.CategoryMenuName}>{item.name}</Text>
      </TouchableOpacity>
    );
  }, []);

  return (
    <View style={styles.CategoryMenuContainer}>
      <FlatList
        data={category}
        renderItem={renderCategory}
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CategoryMenu;
