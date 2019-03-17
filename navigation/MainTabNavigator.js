import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import DiaDiem from '../screens/DiaDiemScreen';
import LichTrinh from '../screens/LichTrinhScreen';
import LienHe from '../screens/LienHeScreen';
import TrangChuScreen from '../screens/TrangChuScreen';
import LichTrinhScreen from '../screens/LichTrinhScreen';
import DiaDiemScreen from '../screens/DiaDiemScreen';
import LienHeScreen from '../screens/LienHeScreen';

const TrangChuStack = createStackNavigator({
  TrangChu: TrangChuScreen,
});

TrangChuStack.navigationOptions = {
  tabBarLabel: 'Trang Chủ',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-home'
          : 'md-home'
      }
    />
  ),
};

const LichTrinhStack = createStackNavigator({
  LichTrinh: LichTrinhScreen,
});

LichTrinhStack.navigationOptions = {
  tabBarLabel: 'Lịch Trình',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-map' : 'md-map'}
    />
  ),
};

const DiaDiemStack = createStackNavigator({
  DiaDiem: DiaDiemScreen,
});

DiaDiemStack.navigationOptions = {
  tabBarLabel: 'Địa Điểm',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-locate' : 'md-locate'}
    />
  ),
};

const LienHeStack = createStackNavigator({
  LienHe: LienHeScreen,
});

LienHeStack.navigationOptions = {
  tabBarLabel: 'Liên Hệ',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-information-circle' : 'md-information-circle'}
    />
  ),
};

export default createBottomTabNavigator({
  TrangChuStack,
  LichTrinhStack,
  DiaDiemStack,
  LienHeStack,
});
