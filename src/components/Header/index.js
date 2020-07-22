import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { getHeight, getWidth } from "@utils/helper";
import { colors, fonts } from "@constants/index";
import { icons } from "@assets/index";
import { useNavigation } from "@react-navigation/native";
const styles = StyleSheet.create({
  HeaderContainer: {
    width: getWidth(375),
    height: getHeight(61),
    flexDirection: "row",
    backgroundColor: colors.yellow129,
  },
  HeaderText: {
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -0.28,
    fontSize: 14,
    fontFamily: fonts.Medium,
    color: colors.white8,
    alignSelf: "center",
    marginLeft: 21,
  },
  HeaderGobackButtonContainer: {
    alignSelf: "center",
    marginLeft: 16,
  },
  HeaderGobackButton: {
    width: 14,
    height: 23.3,
  },
});

const Header = ({ title, children }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.HeaderContainer}>
      <TouchableOpacity
        style={styles.HeaderGobackButtonContainer}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image
          source={icons.leftArrowWhite}
          style={styles.HeaderGobackButton}
        />
      </TouchableOpacity>
      <Text style={styles.HeaderText}>{children}</Text>
    </View>
  );
};

export default Header;
