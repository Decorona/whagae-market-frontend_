import * as React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { colors, fonts } from "../../constants";
import { useSelector, useDispatch, useStore } from "react-redux";
const styles = StyleSheet.create({
  CategoryMenuName: {
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -1.05,
    fontFamily: fonts.Medium,
    color: colors.grey8d,
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
    backgroundColor: colors.white,
  },
});

const CategoryMenu = ({ category, setStore, entire }) => {
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const filterStore = (name) => {
    let category = "";
    switch (name) {
      case "전체":
        category = "entire";
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
    if (category === "entire") {
      setStore(entire);
    } else {
      let filteredStores = entire.filter(
        (store) => store.marketCategory === category
      );
      setStore(filteredStores);
    }
  };

  const renderCategory = ({ item, index }) => {
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
  };

  return (
    <View style={styles.CategoryMenuContainer}>
      <FlatList
        data={category}
        renderItem={renderCategory}
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
        extraData={category}
      />
    </View>
  );
};

export default CategoryMenu;
