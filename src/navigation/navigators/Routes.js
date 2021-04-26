import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { getActiveRouteName, navigationRef, setStatusBar } from '../../utils';
import { maybeLeaveScreenBreadcrumb } from '../../api/sentry';
import MainNavigator from './MainNavigator';
import { NAVIGATORS } from '../constants';

const disabledAndroidBackScreens = [];

let currentRouteName = 'unknown';
let previousRouteName = 'unknown';

export const getCurrentRouteName = () => currentRouteName;
export const getPreviousRouteName = () => previousRouteName;

const Routes = () => {
  const onMount = () => {
    BackHandler.addEventListener('hardwareBackPress', onAndroidBack);
    return () => onUnmount();
  };

  const onUnmount = () => {
    BackHandler.removeEventListener('hardwareBackPress', onAndroidBack);
  };

  useEffect(onMount, []);

  const onAndroidBack = () => {
    const scene = currentRouteName;
    const enableBack = disabledAndroidBackScreens.indexOf(scene) !== -1;
    return enableBack;
  };

  const onRouteChange = state => {
    previousRouteName = currentRouteName;
    currentRouteName = getActiveRouteName(state);

    if (currentRouteName !== 'meals') {
      maybeLeaveScreenBreadcrumb(currentRouteName);
    }
    setStatusBar(currentRouteName);
  };

  const Stack = createStackNavigator();

  return (
    <NavigationContainer ref={navigationRef} onStateChange={onRouteChange}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name={NAVIGATORS.MAIN} component={MainNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
