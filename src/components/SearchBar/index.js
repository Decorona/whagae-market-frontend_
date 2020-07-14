import * as React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import {getWidth, getHeight} from '../../utils/helper';
import {colors, fonts} from '../../constants';

const styles = StyleSheet.create({
  SearchBarContainer: {
    width: getWidth(342),
    height: getWidth(48),
    borderRadius: 8,
    backgroundColor: colors.lightgrey2,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  SearchBarIcon: {
    width: 25.6,
    height: 25.6,
    backgroundColor: 'red',
    alignSelf: 'center',
    marginLeft: 14,
  },
  SearchBarLine: {
    height: 25,
    width: 1,
    backgroundColor: colors.lightgrey,
    alignSelf: 'center',
    marginLeft: 12.1,
  },
  SearchBarTextinput: {
    marginLeft: 12.1,
  },
});

const SearchBar = ({style}) => {
  return (
    <View style={[styles.SearchBarContainer, style]}>
      <View style={styles.SearchBarIcon} />
      <View style={styles.SearchBarLine} />
      <TextInput style={styles.SearchBarTextinput} maxLength={30}></TextInput>
    </View>
  );
};

export default SearchBar;
