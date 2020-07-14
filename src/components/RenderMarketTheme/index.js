import * as React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {getWidth, getHeight} from '../../utils/helper';
import {colors, fonts} from '../../constants';

const styles = StyleSheet.create({});

const RenderMarketTheme = ({theme}) => {
  const renderItems = React.useCallback(({item}) => {
    return <Text>1</Text>;
  }, []);

  const renderTheme = React.useCallback(({item}) => {
    return <FlatList data={item} renderItem={renderItems} />;
  }, []);
  return (
    <View>
      <FlatList data={theme} renderItem={renderTheme} />
    </View>
  );
};

export default RenderMarketTheme;
