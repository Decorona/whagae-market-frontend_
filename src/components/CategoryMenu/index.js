import * as React from 'react';
import {View, StyleSheet, FlatList, Text, TouchableOpacity} from 'react-native';
import {getWidth, getHeight} from '../../utils/helper';
import {colors, fonts} from '../../constants';

const styles = StyleSheet.create({
  CategoryMenuName: {
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
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
  },
});

const CategoryMenu = ({category}) => {
  const renderCategory = React.useCallback(({item}) => {
    return (
      <TouchableOpacity>
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
