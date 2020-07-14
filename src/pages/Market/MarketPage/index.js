import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../constants';
import {CategoryMenu, RenderMarketTheme} from '../../../components';

const styles = StyleSheet.create({
  MarketPageContainer: {
    flex: 1,
  },
  MarketPageTitleAndDayContainer: {
    height: 35,
    paddingTop: 10,
    paddingBottom: 5.4,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.grey,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  MarketPageTitletext: {
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: -1.05,
    fontFamily: fonts.Medium,
    color: colors.grey,
  },
  MarketPageDayText: {
    position: 'absolute',
    right: 18,
    top: 9,
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: -0.28,
    fontFamily: fonts.Medium,
    color: colors.grey,
  },
});

const MarketPage = () => {
  const [storeCategory, setStoreCategory] = React.useState([
    {name: '전체'},
    {name: '마트'},
    {name: '미용실'},
    {name: '네일아트'},
    {name: '의류'},
    {name: '안경점'},
    {name: '세탁소'},
    {name: '꽃집'},
    {name: '철물점'},
  ]);
  const [storeTheme, setStoreTheme] = React.useState([
    [{name: '가게1'}, {name: '가게2'}, {name: '가게3'}, {name: '가게4'}],
    [{name: '가게1'}, {name: '가게2'}, {name: '가게3'}, {name: '가게4'}],
    [{name: '가게1'}, {name: '가게2'}, {name: '가게3'}, {name: '가게4'}],
  ]);
  return (
    <View style={styles.MarketPageContainer}>
      <Text style={styles.MarketPageDayText}>D-7</Text>
      <View style={styles.MarketPageTitleAndDayContainer}>
        <Text style={styles.MarketPageTitletext}>화개장터</Text>
      </View>
      <CategoryMenu category={storeCategory} />
      <RenderMarketTheme theme={storeTheme} />
    </View>
  );
};

export default MarketPage;
