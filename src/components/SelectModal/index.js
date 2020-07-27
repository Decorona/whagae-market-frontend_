import * as React from "react";
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Modal,
  ScrollView,
} from "react-native";
import { colors } from "@constants/index";
import { getHeight, getWidth } from "@utils/helper";

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
});

const SelectModal = ({ selectModalVisible, setSelectModalVisible, items }) => {
  const renderItems = React.useCallback((items) => {}, [items]);
  return (
    <Modal
      animationType={"none"}
      transparent={true}
      visible={selectModalVisible}
    >
      <TouchableWithoutFeedback>
        <View style={styles.SelectModalTouchableWithoutFeedback}></View>
      </TouchableWithoutFeedback>
      <ScrollView
        contentContainerStyle={styles.SelectModalItemsContainer}
      ></ScrollView>
    </Modal>
  );
};

export default SelectModal;
