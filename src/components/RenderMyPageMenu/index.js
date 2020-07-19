import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { getWidth, getHeight } from "../../utils/helper";
import { colors, fonts } from "../../constants";
import { icons } from "../../assets";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  RenderMyPageMenuContainer: {
    marginTop: 5,
    backgroundColor: colors.whitebox,
  },
  RenderMyPageMenuItemTitleText: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: -1.2,
    fontFamily: fonts.Medium,
    color: colors.textblack,
    marginRight: 200,
    width: getWidth(74),
    height: getHeight(24),
  },
  RenderMyPageMenuItemTitleAndScoreContainer: {
    marginLeft: 40,
    alignItems: "center",
    flexDirection: "row",
    width: getWidth(375),
    height: getHeight(56),
  },
  arrowIcon: {
    width: getWidth(6),
    height: getHeight(10),
  },
  listIcon: {
    width: getWidth(22),
    height: getHeight(22),
  },
  LeftImageArea: {
    flex: 0.6,
  },
});

const RenderMyPageMenu = ({ menu, route }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.RenderMyPageMenuContainer}
      onPress={() => navigation.navigate(route)}
    >
      <View style={styles.RenderMyPageMenuItemTitleAndScoreContainer}>
        <View style={styles.LeftImageArea}>
          <Image style={styles.listIcon} source={icons.list} />
        </View>
        <Text style={styles.RenderMyPageMenuItemTitleText}>{menu}</Text>
        <Image style={styles.arrowIcon} source={icons.arrow} />
      </View>
    </TouchableOpacity>
  );
};

export default RenderMyPageMenu;
