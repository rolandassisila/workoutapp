import React from 'react';
import { StatusBar } from 'react-native';

export const navigationRef = React.createRef();

export const navigate = (scene, props) =>
  navigationRef.current?.navigate(scene, props);

export const push = (scene, props) => navigationRef.current?.push(scene, props);

export const goBack = () => navigationRef.current?.goBack();

export const dispatchNavigationAction = action =>
  navigationRef.current?.dispatch(action);

export const getActiveRouteName = state => {
  const route = state.routes[state.index];
  if (route?.state) {
    // Dive into nested navigators
    return getActiveRouteName(route.state);
  }
  return route?.name;
};

export const setStatusBar = screenName => {
  const statusBar = getStatusBarStyle(screenName);
  StatusBar.setBarStyle(statusBar.style);
};

const getStatusBarStyle = screenName => {
  switch (screenName) {
    case 'success':
    case 'error':
    case 'checkout':
      return {
        style: 'light-content',
        bg: 'transparent',
        translucent: true,
      };
    default:
      return {
        style: 'dark-content',
        bg: 'transparent',
        translucent: true,
      };
  }
};
