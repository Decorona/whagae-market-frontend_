import * as React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SearchBar, RenderItemsComponents } from "../../../components";
import { colors, fonts } from "../../../constants";
const styles = StyleSheet.create({
  SearchPageContainer: {
    flex: 1,
  },
  SearchPageLocationNameContainer: {
    height: 35,
    paddingTop: 10,
    paddingBottom: 5.4,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.grey,
  },
  SearchPageLocationNameText: {
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -1.05,
    fontFamily: fonts.Medium,
    color: colors.grey,
    alignSelf: "center",
  },
  SearchPageSearchBarMarginTop: {
    marginTop: 11.6,
  },
});

const SearchPage = () => {
  const [stores, setStores] = React.useState([
    { name: "순이네" },
    { name: "점순이네" },
    { name: "털보네" },
    { name: "돌쇠네" },
    { name: "초삼이네" },
    { name: "돌석이네" },
  ]);
  return (
    <View style={styles.SearchPageContainer}>
      <View style={styles.SearchPageLocationNameContainer}>
        <Text style={styles.SearchPageLocationNameText}>
          서울 성북구 삼선동 1가
        </Text>
      </View>
      <SearchBar style={styles.SearchPageSearchBarMarginTop} />
      <RenderItemsComponents stores={stores} />
    </View>
  );
};

export default SearchPage;
