import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ChallengeScreen from '../screens/ChallengeScreen';
import FeedScreen from '../screens/FeedScreen';
import RecordScreen from '../screens/RecordScreen';
import LeaderBoardScreen from '../screens/LeaderBoardScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon
  //     focused={focused}
  //     name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
  //   />
  // ),
};

const ChallengeStack = createStackNavigator({
  Challenge: ChallengeScreen,
});

ChallengeStack.navigationOptions = {
  tabBarLabel: 'Challenge',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon
  //     focused={focused}
  //     name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
  //   />
  // ),
};

const FeedStack = createStackNavigator({
  Feed: FeedScreen,
});

FeedStack.navigationOptions = {
  tabBarLabel: 'Feed',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon
  //     focused={focused}
  //     name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
  //   />
  // ),
};

const RecordStack = createStackNavigator({
  Record: RecordScreen,
});

RecordStack.navigationOptions = {
  tabBarLabel: 'Record',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon
  //     focused={focused}
  //     name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
  //   />
  // ),
};

const LeaderBoardStack = createStackNavigator({
  LeaderBoard: LeaderBoardScreen,
});

LeaderBoardStack.navigationOptions = {
  tabBarLabel: 'Leader Board',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon
  //     focused={focused}
  //     name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
  //   />
  // ),
};

export default createBottomTabNavigator({
  FeedStack,
  ChallengeStack,
  RecordStack,
  LeaderBoardStack,
  ProfileStack,
  HomeStack,
  // LinksStack,
  // SettingsStack,
});
