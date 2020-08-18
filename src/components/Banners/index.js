import * as React from "react";
import Carousel from "react-native-snap-carousel";
import { View, StyleSheet, Image } from "react-native";
import { getWidth } from "../../utils/helper";
import { colors } from "../../constants";
import { icons } from "../../assets";

const styles = StyleSheet.create({
  BannersItem: {
    height: 192,
    width: getWidth(375),
  },
  temp: {
    height: 192,
    width: getWidth(375),
    backgroundColor: "red",
  },
  BannersPaginationContainer: {
    position: "absolute",
    bottom: 0,
    width: getWidth(375),
    height: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  BannersActiveDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "#ffb000",
    alignSelf: "center",
    marginLeft: 7,
    marginRight: 7,
  },
  BannersInactiveDots: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: colors.white,
    alignSelf: "center",
    marginLeft: 7,
    marginRight: 7,
  },
});

const Banners = ({ banners }) => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const renderBanner = React.useCallback(({ item }) => {
    return <Image source={item.image} style={styles.BannersItem} />;
    // return <View style={styles.temp}></View>;
  }, []);
  const renderDots = React.useCallback(
    (items) => {
      return items.map((item, index) => {
        return (
          <View
            key={index}
            style={[
              styles.BannersInactiveDots,
              index === activeSlide && styles.BannersActiveDot,
            ]}
          ></View>
        );
      });
    },
    [activeSlide]
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
