import * as React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {colors, fonts} from '../../../constants';
import {getWidth} from '../../../utils/helper';
import {Banners, RenderItemsComponents} from '../../../components';

const styles = StyleSheet.create({
  HomePageContainer: {
    flex: 1,
  },
  HomePageUserlocationNameContainer: {
    height: 35,

    paddingTop: 10,
    paddingBottom: 5.4,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.grey,
  },
  HomePageUserlocationNameText: {
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: -1.05,
    fontFamily: fonts.Medium,
    color: colors.grey,
    alignSelf: 'center',
  },
  HomePageStoreCategoryContainer: {
    height: 37.6,
    paddingTop: 8.6,
    paddingBottom: 9,
  },
  HomePageStoreCategoryName: {
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: -1.05,
    fontFamily: fonts.Medium,
    color: colors.grey,
    marginLeft: 16,
  },
});

const HomePage = () => {
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
  const [stores, setStores] = React.useState([
    {name: '순이네'},
    {name: '점순이네'},
    {name: '털보네'},
    {name: '돌쇠네'},
    {name: '초삼이네'},
    {name: '돌석이네'},
  ]);

  const [banners, setBanners] = React.useState([
    {temp: 1},
    {temp: 2},
    {temp: 3},
  ]);

  const renderStoreCategory = React.useCallback(({item}) => {
    return (
      <TouchableOpacity>
        <Text style={styles.HomePageStoreCategoryName}>{item.name}</Text>
      </TouchableOpacity>
    );
  }, []);

  return (
    <View style={styles.HomePageContainer}>
      <View style={styles.HomePageUserlocationNameContainer}>
        <Text style={styles.HomePageUserlocationNameText}>
          서울 성북구 삼선동 1가
        </Text>
      </View>
      <View style={styles.HomePageStoreCategoryContainer}>
        <FlatList
          data={storeCategory}
          renderItem={renderStoreCategory}
          keyExtractor={(item) => item.name}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Banners banners={banners} />
      <RenderItemsComponents stores={stores} />
    </View>
  );
};

export default HomePage;
