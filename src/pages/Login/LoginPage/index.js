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
import { getWidth } from "../../../utils/helper";
import { URL_POST_LOGIN } from "../../../constants/api";
import { useSelector, useDispatch } from "react-redux";
import { userIdUpdate } from "../../../actions/user";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  LoginPageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  Textinput: {},
  LoginButton: {
    alignSelf: "center",
    backgroundColor: colors.yellow,
    padding: 10,
    marginTop: 17,
    width: getWidth(314),
    color: "white",
    borderRadius: 8,
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
    fontSize: 13,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 19,
    letterSpacing: -0.65,
    fontFamily: fonts.Medium,
    alignSelf: "center",
  },
  logo: {
    width: getWidth(120),
    height: getWidth(120),
  },
});

const LoginPage = () => {
  const [id, setId] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const _login = async () => {
    try {
      const body = {
        loginId: id,
        password: password,
      };
      const res = await axios.post(URL_POST_LOGIN, body, {});
      if (res.status === 200) {
        console.log(res);
        dispatch(userIdUpdate(res.data.id));
        navigation.navigate("Tab");
      }
    } catch (error) {
      alert("로그인에 실패하였습니다.");
      console.log(error);
      console.error(error);
    }
  };
  return (
    <View style={styles.LoginPageContainer}>
      <Image style={styles.logo} source={icons.app_logo} />
      <Text style={styles.Title}>화개장터</Text>
      <View
        style={{
          width: getWidth(314),
          height: 39,
          opacity: 0.81,
          borderRadius: 8,
          borderStyle: "solid",
          borderWidth: 1,
          borderColor: "#efb129",
          justifyContent: "center",
        }}
      >
        <TextInput
          onChangeText={(text) => setId(text)}
          value={id}
          placeholder={"이메일을 입력해주세요."}
          style={{
            marginLeft: 12,
          }}
          placeholderTextColor="#efb129"
          maxLength={30}
        ></TextInput>
      </View>
      <View
        style={{
          width: getWidth(314),
          height: 39,
          opacity: 0.81,
          borderRadius: 8,
          borderStyle: "solid",
          borderWidth: 1,
          borderColor: "#efb129",
          justifyContent: "center",
          marginTop: 17,
        }}
      >
        <TextInput
          onChangeText={(text) => setPassword(text)}
          value={password}
          style={{
            marginLeft: 12,
          }}
          placeholder={"비밀번호를 입력해주세요."}
          placeholderTextColor="#efb129"
          maxLength={30}
          secureTextEntry={true}
        ></TextInput>
      </View>

      <TouchableOpacity
        style={styles.LoginButton}
        onPress={() => {
          _login();
        }}
      >
        <Text style={styles.LoginButtonText}>로그인</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginPage;
