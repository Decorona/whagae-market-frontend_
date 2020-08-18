import * as React from "react";
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { getWidth } from "../../utils/helper";
import { colors, fonts } from "../../constants";
import { icons } from "../../assets";
import { URL_GET_SEARCH_ITEM } from "../../constants/api";
import axios from "axios";
import { useSelector } from "react-redux";
const styles = StyleSheet.create({
  SearchBarContainer: {
    width: getWidth(342),
    height: getWidth(48),
    borderRadius: 8,
    backgroundColor: colors.lightgrey2,
    alignSelf: "center",
    flexDirection: "row",
  },
  SearchBarIcon: {
    width: 25.6,
    height: 25.6,

    marginRight: 12.1,
  },
  SearchBarTextinput: {
    marginLeft: 14,
  },
});
const SearchBar = ({ style, setItems, setSearch }) => {
  const [searchName, setSearchName] = React.useState("");
  const user = useSelector((state) => state.user);
  const _searchStores = async (searchName) => {
    try {
      const res = await axios.get(
        URL_GET_SEARCH_ITEM(searchName, user.location.key),
        {}
      );
      if (res.status === 200) {
        setItems(res.data);
      }
    } catch (error) {
      console.log(error);
      console.error(error);
    }
  };
  return (
    <View style={[styles.SearchBarContainer, style]}>
      <TextInput
        style={styles.SearchBarTextinput}
        maxLength={30}
        value={searchName}
        onChangeText={(text) => {
          setSearchName(text);
        }}
      ></TextInput>
      <View style={{ flex: 1 }}></View>
      <TouchableOpacity
        style={{ alignSelf: "center" }}
        onPress={() => {
          _searchStores(searchName);
        }}
      >
        <Image source={icons.searchIcon} style={styles.SearchBarIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
