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

const styles = StyleSheet.create({
  RenderMarketThemeContainer: {
    paddingHorizontal: 11,
    paddingTop: 17.5,
    flex: 1,
  },
  RenderMarketThemeEmpty: {
    flex: 1,
  },
  RenderMarketThemeTitleText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: -1.2,
    fontFamily: fonts.Medium,
    color: colors.grey,
    marginLeft: 5,
    marginBottom: 11.5,
  },
  RenderMarketSticker: {
    position: 'absolute',
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: colors.white,
    marginLeft: 6,
    marginTop: 5.5,
  },
  RenderMarketThemeScoreIcon: {
    width: 12,
    height: 12,
    backgroundColor: 'red',
    alignSelf: 'center',
  },
  RenderMarketThemeScoreText: {
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: -1.05,
    fontFamily: fonts.Medium,
    color: colors.grey,
    alignSelf: 'center',
    marginLeft: 3,
  },
  RenderMarketThemeReviewText: {
    fontSize: 8,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 12,
    letterSpacing: -0.6,
    color: colors.grey,
    alignSelf: 'center',
    fontFamily: fonts.Medium,
  },
  RenderMarketThemeCommentText: {
    fontSize: 8,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 12,
    letterSpacing: -0.6,
    color: colors.grey,
    alignSelf: 'center',
    marginLeft: 3,
    fontFamily: fonts.Medium,
  },
  RenderMarketThemeDeliveryContainer: {
    flexDirection: 'row',
    paddingTop: 4.2,
  },
  RenderMarketThemeReviewAndCommentContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    paddingBottom: 6.8,
  },
  RenderMarketThemeItemAndInfoContainer: {
    width: getWidth(166),
    height: getHeight(256),
    marginLeft: 5,
    marginRight: 5,
  },
  RenderMarketThemeItemTitleText: {
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: -1.2,
    fontFamily: fonts.Medium,
    color: colors.grey,
  },
  RenderMarketThemeDeliveryTimeText: {
    fontSize: 8,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 12,
    letterSpacing: -0.6,
    color: colors.grey,
    fontFamily: fonts.Medium,
  },
  RenderMarketThemeItemTitleAndScoreContainer: {
    flexDirection: 'row',
  },
  RenderMarketThemeItemImage: {
    backgroundColor: colors.lightgrey,
    width: getWidth(166),
    height: getHeight(166),
  },
  RenderMarketThemeFlatList: {},
});

const RenderMarketTheme = ({theme}) => {
  const renderItems = React.useCallback(({item}) => {
    return (
      <TouchableOpacity style={styles.RenderMarketThemeItemAndInfoContainer}>
        <View style={styles.RenderMarketThemeItemImage}>
          <View style={styles.RenderMarketSticker}></View>
        </View>
        <View style={styles.RenderMarketThemeItemTitleAndScoreContainer}>
          <Text style={styles.RenderMarketThemeItemTitleText}>{item.name}</Text>
          <View style={styles.RenderMarketThemeEmpty}></View>
          <View style={styles.RenderMarketThemeScoreIcon}></View>
          <Text style={styles.RenderMarketThemeScoreText}>4.2</Text>
        </View>
        <View style={styles.RenderMarketThemeReviewAndCommentContainer}>
          <Text style={styles.RenderMarketThemeReviewText}>최근리뷰 10+</Text>
          <Text style={styles.RenderMarketThemeCommentText}>
            최근사장님댓글 10+
          </Text>
        </View>
        <View style={styles.RenderMarketThemeDeliveryContainer}>
          <Text style={styles.RenderMarketThemeDeliveryTimeText}>
            배달비 0원
          </Text>
          <View style={styles.RenderMarketThemeEmpty}></View>
          <Text style={styles.RenderMarketThemeDeliveryTimeText}>40~50분</Text>
        </View>
      </TouchableOpacity>
    );
  }, []);

  const renderTheme = React.useCallback(({item}) => {
    return (
      <View>
        <Text style={styles.RenderMarketThemeTitleText}>
          오늘 우리동네 핫플
        </Text>
        <FlatList
          data={item}
          renderItem={renderItems}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }, []);
  return (
    <View style={styles.RenderMarketThemeContainer}>
      <FlatList
        data={theme}
        renderItem={renderTheme}
        contentContainerStyle={styles.RenderMarketThemeFlatList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default RenderMarketTheme;
