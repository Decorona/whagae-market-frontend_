import * as React from "react";
import { StyleSheet, Alert, View } from "react-native";
import AppNavigator from "./src/system/AppNavigator/index";
import { store, persistor } from "./src/reducers";
import { Provider } from "react-redux";

import { colors } from "./src/constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AppNavigator></AppNavigator>
      </View>
    </Provider>
  );
};

export default App;
