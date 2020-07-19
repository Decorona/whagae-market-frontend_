import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { fonts, colors } from "../../constants";
import { icons } from "../../assets";
import { getWidth, getHeight } from "../../utils/helper";
import { useSelector } from "react-redux";
const styles = StyleSheet.create({
  OrderTabContainer: {
    paddingTop: 27,
    paddingLeft: 17,
    paddingRight: 32,
  },
  OrderTabCategoryContainer: {
    flexDirection: "row",
  },
  OrderTabEmpty: {
    flex: 1,
  },
  OrderTabCategoryNameText: {
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: -1.2,
    fontFamily: fonts.Medium,
    color: colors.textblack,
  },
  OrderTabCategoryAmountText: {
    fontSize: 12,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 18,
    letterSpacing: -0.9,
    fontFamily: fonts.Medium,
    color: colors.textblack,
  },
  OrderTabOptionNameText: {
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -1.05,
    fontFamily: fonts.Medium,
    color: colors.grey6f,
    marginLeft: 5,
  },
  OrderTabOptionContainer: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  OrderTabOptionFlatList: {
    paddingTop: 4,
  },
  OrderTabOptionPriceText: {
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -1.05,
    fontFamily: fonts.Medium,
    color: colors.grey6f,
  },
  OrderTabOptionIcon: {
    width: 16,
    height: 16,
  },
  OrderTabOptionIconContainer: {
    alignSelf: "center",
  },
  OrderTabOptionCategoryFlatList: {
    borderBottomColor: colors.yellow,
    borderBottomWidth: 0.5,
    paddingBottom: 18,
    paddingTop: 17,
  },
});

const OrderTab = ({
  orderInfo,
  setOrderInfo,
  setItemTotalPrice,
  itemTotalPrice,
}) => {
  const [, updateState] = React.useState();
  const appStatus = useSelector((state) => state.appStatus);
  const forceUpdate = React.useCallback(() => updateState({}), []);
  return (
    <View style={styles.OrderTabOptionCategoryFlatList}>
      {appStatus.GoodsOptions.map((option, index2) => {
        return (
          <View style={styles.OrderTabOptionContainer}>
            {value2.check == true ? (
              <TouchableOpacity
                style={styles.OrderTabOptionIconContainer}
                onPress={() => {
                  let temp = orderInfo;
                  let updatedPrice = itemTotalPrice - value2.price;
                  temp[index1].options[index2].check = false;
                  setItemTotalPrice(updatedPrice);
                  setOrderInfo(temp);
                  forceUpdate();
                }}
              >
                <Image
                  source={icons.optionCheckedBox}
                  style={styles.OrderTabOptionIcon}
                ></Image>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.OrderTabOptionIconContainer}
                onPress={() => {
                  let temp = orderInfo;
                  let updatedPrice = itemTotalPrice + value2.price;
                  temp[index1].options[index2].check = true;
                  setItemTotalPrice(updatedPrice);
                  setOrderInfo(temp);
                  forceUpdate();
                }}
              >
                <Image
                  source={icons.optionCheckBox}
                  style={styles.OrderTabOptionIcon}
                ></Image>
              </TouchableOpacity>
            )}

            <Text style={styles.OrderTabOptionNameText}>
              {option.optionsName}
            </Text>
            <View style={styles.OrderTabEmpty}></View>
            <Text style={styles.OrderTabOptionPriceText}>
              +{option.optionPrice}원
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default OrderTab;
