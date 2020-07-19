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
  CategoryMenuActiveName: {
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -1.05,
    fontFamily: fonts.Bold,
    color: colors.gold1,
    marginLeft: 16,
  },
  CategoryMenuContainer: {
    height: 37.6,
    paddingTop: 8.6,
    paddingBottom: 9,
    borderBottomColor: colors.white,
    borderBottomWidth: 0.5,
  },
});

const CategoryMenu = ({ category }) => {
  const appStatus = useSelector((state) => state.appStatus);
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const filterStore = (name) => {
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
      let temp = [];
      for (let i = 0; i < appStatus.stores.length; i++) {
        if (appStatus.stores[i].marketCategory === category) {
          console.log("call");
          temp.push(appStatus.stores[i]);
        }
      }
      console.log(category);
      console.log(temp);
      // dispatch(storesUpdate(temp));
    }
  };

  const renderCategory = React.useCallback(
    ({ item, index }) => {
      return (
        <TouchableOpacity
          onPress={() => {
            setActiveIndex(index);
            filterStore(item.name);
          }}
        >
          <Text
            style={[
              styles.CategoryMenuName,
              index === activeIndex && styles.CategoryMenuActiveName,
            ]}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    },
    [activeIndex]
  );

  return (
    <View style={styles.CategoryMenuContainer}>
      <FlatList
        data={category}
        renderItem={renderCategory}
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
        // extraData={category}
      />
    </View>
  );
};

export default CategoryMenu;
