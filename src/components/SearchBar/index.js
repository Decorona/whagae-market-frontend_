import * as React from "react";
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { getWidth, getHeight } from "../../utils/helper";
import { colors, fonts } from "../../constants";
import { icons } from "../../assets";
import { URL_GET_SEARCH_ITEM } from "../../constants/api";
import axios from "axios";
import { useDispatch } from "react-redux";
import { storesUpdate } from "../../actions/appStatus";
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

const useForceUpdate = () => {
  const [, setState] = React.useState();
  return setState;
};
const SearchBar = ({ style, setSearch }) => {
  const [searchName, setSearchName] = React.useState("");
  const dispatch = useDispatch();
  const forceUpdate = useForceUpdate();
  const _searchStores = async (searchName) => {
    try {
      // const res = await axios.get(URL_GET_SEARCH_ITEM(name), {});
      const res = await axios.get(URL_GET_SEARCH_ITEM(searchName), {});
      if (res.status === 200) {
        dispatch(storesUpdate(res.data));
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
          forceUpdate();
          setSearch(true);
        }}
      >
        <Image source={icons.searchIcon} style={styles.SearchBarIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
