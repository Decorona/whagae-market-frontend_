import * as React from "react";
import { View, StyleSheet, Button } from "react-native";

const styles = StyleSheet.create({
  ButtonArea: {
    marginBottom: 10,
  },
});

const MyPageButton = ({ title }) => {
  const onPressButton = () => {
    alert("버튼클릭");
  };
  return (
    <View style={styles.ButtonArea}>
      <Button onPress={onPressButton} title={title} color="lightgray" />
    </View>
  );
};

export default MyPageButton;
