import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, fonts } from "../../../constants";
import { useSelector, useDispatch, useStore } from "react-redux";
import { locationUpdate } from "../../../actions/user";
import Postcode from "react-native-daum-postcode";
const styles = StyleSheet.create({
  SetAddressContainer: {
    flex: 1,
  },
  SetAddressDaumAddressView: {
    flex: 1,
  },
});

const SetAddress = () => {
  const user = useSelector((state) => {
    state.user;
  });
  const dispatch = useDispatch();
  const DaumAddressView = () => {
    return (
      <Postcode
        style={styles.SetAddressDaumAddressView}
        jsOptions={{ animated: true }}
        onSelected={(data) => {
          dispatch(
            locationUpdate({
              key: data.sigungu,
              display: data.address,
            })
          );
        }}
      />
    );
  };
  return (
    <View style={styles.SetAddressContainer}>
      <DaumAddressView />
    </View>
  );
};

export default SetAddress;
