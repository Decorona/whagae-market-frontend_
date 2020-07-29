import * as React from "react";
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Modal,
  ScrollView,
  Text,
} from "react-native";
import { colors, fonts } from "@constants/index";
import { getHeight, getWidth, width, height } from "@utils/helper";

const styles = StyleSheet.create({
  SelectModalTouchableWithoutFeedback: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
    position: "absolute",
  },
  SelectModalItemsContainer: {
    width: getWidth(175),
    height: getHeight(250),
    backgroundColor: colors.white,
    position: "absolute",
    alignSelf: "center",
    bottom: getHeight(812) / 2 - 125,
  },
  SelectModalItemContainer: {
    width: getWidth(175),
    height: getHeight(83.3),
    justifyContent: "center",
  },
  SelectModalText: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -1.05,
    fontFamily: fonts.Medium,
    color: colors.grey3c,
  },
});

const SelectModal = ({
  selectModalVisible,
  setSelectModalVisible,
  items,
  setItem,
}) => {
  const renderItems = React.useCallback(
    (items) => {
      return items.map((item) => {
        return (
          <TouchableOpacity
            style={styles.SelectModalItemContainer}
            onPress={() => {
              setItem(item);
              setSelectModalVisible(false);
            }}
          >
            <Text style={styles.SelectModalText}>{item}</Text>
          </TouchableOpacity>
        );
      });
    },
    [items]
  );
  return (
    <Modal
      animationType={"none"}
      transparent={true}
      visible={selectModalVisible}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          setSelectModalVisible(false);
        }}
      >
        <View style={styles.SelectModalTouchableWithoutFeedback}></View>
      </TouchableWithoutFeedback>
      <ScrollView style={styles.SelectModalItemsContainer}>
        {renderItems(items)}
      </ScrollView>
    </Modal>
  );
};

export default SelectModal;
