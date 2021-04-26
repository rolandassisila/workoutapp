import * as Sentry from '@sentry/react-native';
import { snakeCase } from 'lodash';

import { getActiveRouteName } from '../utils';
import FeatureEnabler from '../featureEnabler';

export const maybeSendReport = error => {
  if (FeatureEnabler.sentry) {
    Sentry.captureException(error);
  }
};

export const setUserContext = userContext => {
  if (FeatureEnabler.sentry) {
    Sentry.setUser(userContext);
  }
};

let pastRoute = null;
export const maybeLeaveScreenBreadcrumb = () => {
  if (FeatureEnabler.sentry) {
    const currentScene = getActiveRouteName();
    if (pastRoute !== currentScene) {
      pastRoute = currentScene;
      const route = snakeCase(currentScene);
      Sentry.addBreadcrumb({
        category: 'nav',
        message: route,
      });
    }
  }
};
