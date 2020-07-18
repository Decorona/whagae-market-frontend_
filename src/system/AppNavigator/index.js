import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet, Image } from "react-native";
import { icons } from "../../assets";
import {
  HomePage,
  SetAddress,
  StoreDetail,
  ItemDetail,
  ReadReviewPage,
} from "../../pages/Home";
import { SearchPage } from "../../pages/Search";
import { MarketPage } from "../../pages/Market";
import { MyPageComponent, DibsMarket, OrderList } from "../../pages/MyPage";
import { BasketPage } from "../../pages/Basket";
import { colors } from "../../constants";

const RootStack = createStackNavigator();

const TabNavigator = createBottomTabNavigator();

const HomeStack = createStackNavigator();

const LoginStack = createStackNavigator();

const SearchStack = createStackNavigator();

const MarketStack = createStackNavigator();

const MyPageStack = createStackNavigator();

const BasketStack = createStackNavigator();

//

const Home = () => {
  return (
    <HomeStack.Navigator headerMode={false} initialRouteName="HomePage">
      <HomeStack.Screen name="HomePage" component={HomePage} />
      <HomeStack.Screen name="SetAddress" component={SetAddress} />
      <HomeStack.Screen name="StoreDetail" component={StoreDetail} />
      <HomeStack.Screen name="ItemDetail" component={ItemDetail} />
      <HomeStack.Screen name="ReadReviewPage" component={ReadReviewPage} />
      <HomeStack.Screen name="DibsMarket" component={DibsMarket} />
      <HomeStack.Screen name="OrderList" component={OrderList} />

    </HomeStack.Navigator>
  );
};

const Login = () => {
  return <LoginStack.Navigator headerMode={false}></LoginStack.Navigator>;
};

const Search = () => {
  return (
    <SearchStack.Navigator headerMode={false}>
      <SearchStack.Screen name="SearchPage" component={SearchPage} />
    </SearchStack.Navigator>
  );
};

const Market = () => {
  return (
    <MarketStack.Navigator headerMode={false}>
      <MarketStack.Screen name="MarketPage" component={MarketPage} />
      <MarketStack.Screen name="DibsMarket" component={DibsMarket} />
    </MarketStack.Navigator>
  );
};

const MyPage = () => {
  return (
    <MyPageStack.Navigator headerMode={false}>
      <MyPageStack.Screen name="MyPage" component={MyPageComponent} />
    </MyPageStack.Navigator>
  );
};

const Basket = () => {
  return (
    <BasketStack.Navigator headerMode={false}>
      <BasketStack.Screen name="BasketPage" component={BasketPage} />
    </BasketStack.Navigator>
  );
};

const Root = () => {
  return (
    <RootStack.Navigator initialRouteName="Tab" headerMode={false}>
      <RootStack.Screen name="Tab" component={Tab} />
      <RootStack.Screen name="Login" component={Login} />
    </RootStack.Navigator>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    height: 58,
    backgroundColor: colors.greya5,
  },
  tabHomeIcon: {
    width: 28,
    height: 43,
  },
  tabSearchIcon: {
    width: 25.6,
    height: 43,
  },
  tabMarketIcon: {
    width: 36,
    height: 44.2,
  },
  tabMyPageIcon: {
    width: 23.1,
    height: 24.8,
    alignSelf: "center",
  },
  tabMyPageText: {
    width: 46,
    height: 15,
    marginTop: 4,
  },
  tabBasketIcon: {
    width: 36,
    height: 36.2,
  },
});

const Tab = () => {
  return (
    <TabNavigator.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          switch (route.name) {
            case "Home":
              return (
                <Image style={styles.tabHomeIcon} source={icons.tabHome} />
              );
              break;
            case "Search":
              return (
                <Image style={styles.tabSearchIcon} source={icons.tabSearch} />
              );
              break;
            case "Market":
              return (
                <Image style={styles.tabMarketIcon} source={icons.tabMarket} />
              );
              break;
            case "MyPage":
              return (
                <View>
                  <Image
                    style={styles.tabMyPageIcon}
                    source={icons.tabMypage}
                  />
                  <Image
                    style={styles.tabMyPageText}
                    source={icons.tabMypageText}
                  />
                </View>
              );
              break;
            case "Basket":
              return (
                <Image style={styles.tabBasketIcon} source={icons.tabBasket} />
              );
              break;
            default:
              break;
          }
        },
      })}
      tabBarOptions={{
        showLabel: false,
        tabStyle: styles.tabContainer,
      }}
    >
      <TabNavigator.Screen name="Home" component={Home} />
      <TabNavigator.Screen name="Search" component={Search} />
      <TabNavigator.Screen name="Market" component={Market} />
      <TabNavigator.Screen name="MyPage" component={MyPage} />
      <TabNavigator.Screen name="Basket" component={Basket} />
    </TabNavigator.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};

export default AppNavigator;
