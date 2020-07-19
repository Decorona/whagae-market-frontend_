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
    alignSelf: "center",
    marginLeft: 14,
  },
  SearchBarTextinput: {
    marginLeft: 12.1,
  },
});

const SearchBar = ({ style }) => {
  return (
    <View style={[styles.SearchBarContainer, style]}>
      <Image source={icons.searchIcon} style={styles.SearchBarIcon} />
      <TextInput style={styles.SearchBarTextinput} maxLength={30}></TextInput>
    </View>
  );
};

export default SearchBar;
