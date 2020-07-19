import * as React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { getHeight, getWidth } from "../../../utils/helper";
import {
  SearchBar,
  RenderItemsComponents,
  SearchRender,
} from "../../../components";
import { colors, fonts } from "../../../constants";
import { icons } from "../../../assets";
import { URL_GET_SEARCH_ITEM } from "../../../constants/api";
import axios from "axios";

const styles = StyleSheet.create({
  SearchPageContainer: {
    flex: 1,
  },
  SearchPageLocationNameContainer: {
    width: getWidth(375),
    height: getHeight(35),
    paddingTop: 10,
    paddingBottom: 5.4,
    borderBottomWidth: 0.1,
    borderBottomColor: colors.grey,
    justifyContent: "center",
    flexDirection: "row",
  },
  SearchPageLocationNameText: {
    width: getWidth(131),
    height: getHeight(20),
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -1.05,
    fontFamily: fonts.Medium,
    color: colors.grey,
  },
  SearchPageSearchBarMarginTop: {
    backgroundColor: colors.white,
    marginTop: 11.6,
  },
  checkedOption: {
    marginTop: 2,
    width: getWidth(18),
    height: getHeight(18),
  },
});

const SearchPage = ({ name }) => {
  const [search, setSearch] = React.useState(false);
  return (
    <View style={styles.SearchPageContainer}>
      <View style={styles.SearchPageLocationNameContainer}>
        <Text style={styles.SearchPageLocationNameText}>
          서울 성북구 삼선동 1가
        </Text>
        <Image source={icons.checked} style={styles.checkedOption}></Image>
      </View>
      <SearchBar
        setSearch={setSearch}
        style={styles.SearchPageSearchBarMarginTop}
      />
      {search ? <SearchRender search={search} /> : <RenderItemsComponents />}
    </View>
  );
};

export default SearchPage;
