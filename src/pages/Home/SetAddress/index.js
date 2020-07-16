import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, fonts } from "../../../constants";
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
  const DaumAddressView = () => {
    return (
      <Postcode
        style={styles.SetAddressDaumAddressView}
        jsOptions={{ animated: true }}
        onSelected={(data) => alert(JSON.stringify(data))}
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
