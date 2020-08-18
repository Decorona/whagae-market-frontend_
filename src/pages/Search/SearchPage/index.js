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
import { SearchBar, SearchRender } from "../../../components";
import { colors, fonts } from "../../../constants";
import { icons } from "../../../assets";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { URL_GET_SEARCH_ITEM } from "../../../constants/api";
const styles = StyleSheet.create({
  SearchPageContainer: {
    flex: 1,
  },
  SearchPageLocationNameContainer: {
    width: getWidth(375),
    height: getHeight(35),
    padding: 20,
    borderBottomColor: colors.grey,
    justifyContent: "center",
    flexDirection: "row",
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
    backgroundColor: colors.white,
    marginTop: 11.6,
  },
  checkedOption: {
    marginLeft: 5,
    width: 18,
    height: 18,
    borderRadius: 9,
    alignSelf: "center",
  },
});

const SearchPage = () => {
  const appStatus = useSelector((state) => state.appStatus);
  const user = useSelector((state) => state.user);
  const [searchStores, setSearchStores] = React.useState([]);
  const navigation = useNavigation();
  const _searchStores = async (searchName) => {
    try {
      const res = await axios.get(
        URL_GET_SEARCH_ITEM(searchName, user.location.key),
        {}
      );
      if (res.status === 200) {
        setSearchStores(res.data);
      }
    } catch (error) {
      console.log(error);
      console.error(error);
    }
  };
  React.useEffect(() => {
    _searchStores("");
  }, []);
  return (
    <View style={styles.SearchPageContainer}>
      <TouchableOpacity
        style={styles.SearchPageLocationNameContainer}
        onPress={() => {
          navigation.navigate("SetAddress");
        }}
      >
        <Text style={styles.SearchPageLocationNameText}>
          {user.location.display}
        </Text>
        <Image source={icons.checked} style={styles.checkedOption}></Image>
      </TouchableOpacity>
      <SearchBar
        setItems={setSearchStores}
        style={styles.SearchPageSearchBarMarginTop}
      />
      <SearchRender stores={searchStores} />
    </View>
  );
};

export default SearchPage;
