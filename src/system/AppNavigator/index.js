import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native';

import {HomePage} from '../../pages/Home';

const RootStack = createStackNavigator();

const TabNavigator = createBottomTabNavigator();

const HomeStack = createStackNavigator();

const LoginStack = createStackNavigator();

const SearchStack = createStackNavigator();

const MarketStack = createStackNavigator();

const MyPageStack = createStackNavigator();

const BasketStack = createStackNavigator();

const Home = () => {
  return (
    <HomeStack.Navigator headerMode={false} initialRouteName="HomePage">
      <HomeStack.Screen name="HomePage" component={HomePage} />
    </HomeStack.Navigator>
  );
};

const Login = () => {
  return <LoginStack.Navigator headerMode={false}></LoginStack.Navigator>;
};

const Search = () => {};

const Market = () => {};

const MyPage = () => {};

const Basket = () => {};

const Root = () => {
  return (
    <RootStack.Navigator initialRouteName="Tab" headerMode={false}>
      <RootStack.Screen name="Tab" component={Tab} />
      <RootStack.Screen name="Login" component={Login} />
    </RootStack.Navigator>
  );
};

const Tab = () => {
  return (
    <TabNavigator.Navigator initialRouteName="Home">
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
