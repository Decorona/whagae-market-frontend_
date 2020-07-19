import * as React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { colors, fonts } from "../../../constants";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import { icons } from "../../../assets";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  LoginPageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 30,
  },
  Textinput: {
    width: width * 0.75,
    height: 35,
    paddingTop: 10,
    margin: 10,
    paddingBottom: 5.4,
    borderWidth: 1,
    fontSize: 20,
    borderRadius: 8,
    borderColor: colors.yellow,
    borderBottomColor: colors.yellow,
  },
  LoginButton: {
    alignItems: "center",
    backgroundColor: colors.yellow,
    padding: 10,
    marginTop: 10,
    width: width * 0.75,
    color: "white",
    borderRadius: 8,
  },
  PlaceholderStyle: {
    marginLeft: 30,
    paddingLeft: 30,
    alignSelf: "center",
  },
  Title: {
    fontSize: 30,
    fontWeight: "500",
    fontFamily: fonts.Title,
    color: colors.yellow,
    marginBottom: 50,
    marginTop: 10,
  },
  LoginButtonText: {
    color: "white",
  },
});

const LoginPage = () => {
  const [id, setId] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <View style={styles.LoginPageContainer}>
      <Image style={styles.logo} source={icons.app_logo} />
      <Text style={styles.Title}>화개장터</Text>
      <TextInput
        onChangeText={(text) => setId(text)}
        value={id}
        style={styles.Textinput}
        placeholderStyle={styles.PlaceholderStyle}
        placeholder={"   이메일을 입력해주세요."}
        placeholderTextColor="#efb129"
        maxLength={30}
      ></TextInput>
      <TextInput
        onChangeText={(text) => setPassword(text)}
        value={password}
        style={styles.Textinput}
        placeholder={"   비밀번호를 입력해주세요."}
        PlaceholderStyle={styles.PlaceholderStyle}
        placeholderTextColor="#efb129"
        maxLength={30}
      ></TextInput>
      <TouchableOpacity style={styles.LoginButton}>
        <Text style={styles.LoginButtonText}>로그인</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginPage;
