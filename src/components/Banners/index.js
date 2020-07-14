import * as React from 'react';
import Carousel from 'react-native-snap-carousel';
import {View, StyleSheet} from 'react-native';
import {getWidth} from '../../utils/helper';
import {colors} from '../../constants';
const styles = StyleSheet.create({
  BannersItem: {
    height: 192,
    backgroundColor: 'red',
  },
  BannersPaginationContainer: {
    position: 'absolute',
    bottom: 0,
    width: getWidth(375),
    height: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  BannersActiveDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'yellow',
    alignSelf: 'center',
    marginLeft: 7,
    marginRight: 7,
  },
  BannersInactiveDots: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: colors.white,
    alignSelf: 'center',
    marginLeft: 7,
    marginRight: 7,
  },
});

const Banners = ({banners}) => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const renderBanner = React.useCallback(({item}) => {
    return <View style={styles.BannersItem}></View>;
  }, []);
  const renderDots = React.useCallback(
    (items) => {
      return items.map((item, index) => {
        return (
          <View
            style={[
              styles.BannersInactiveDots,
              index === activeSlide && styles.BannersActiveDot,
            ]}></View>
        );
      });
    },
    [activeSlide],
  );

  return (
    <View>
      <Carousel
        data={banners}
        renderItem={renderBanner}
        sliderWidth={getWidth(375)}
        itemWidth={getWidth(375)}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <View style={styles.BannersPaginationContainer}>
        {renderDots(banners)}
      </View>
    </View>
  );
};

export default Banners;
