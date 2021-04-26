import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { MainScreen, MyPlanScreen, ProfileScreen } from 'screens';
import { Icon } from '../styles';
import { TAB_BAR_OPTIONS } from '../config';
import { IMAGES } from 'constants';
import { SCREENS } from '../constants';

const Tab = createBottomTabNavigator();

const homeOptions = {
  tabBarIcon: ({ focused }) => (
    <Icon source={focused ? IMAGES.MAIN_ACTIVE : IMAGES.MAIN} />
  ),
};

const myPlanOption = {
  tabBarIcon: ({ focused }) => (
    <Icon source={focused ? IMAGES.SETTINGS_ACTIVE : IMAGES.SETTINGS} />
  ),
};

const profileOption = {
  tabBarIcon: ({ focused }) => (
    <Icon
      source={focused ? IMAGES.NOTIFICATIONS_ACTIVE : IMAGES.NOTIFICATIONS}
    />
  ),
};

export default function MainNavigator() {
  return (
    <Tab.Navigator tabBarOptions={TAB_BAR_OPTIONS}>
      <Tab.Screen
        name={SCREENS.HOME}
        options={homeOptions}
        component={MainScreen}
      />
      <Tab.Screen
        name={SCREENS.MY_PLAN}
        options={myPlanOption}
        component={MyPlanScreen}
      />
      <Tab.Screen
        name={SCREENS.PROFILE}
        options={profileOption}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
