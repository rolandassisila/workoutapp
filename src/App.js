import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as Sentry from '@sentry/react-native';

import Routes from './navigation/navigators/Routes';
import { configStore } from './state/store';
import FeatureEnabler from './featureEnabler';

if (FeatureEnabler.sentry) {
  Sentry.init({ dsn: '' });
}

const { store, persistor } = configStore();
export { store };
export const dispatch = store.dispatch;
export const persistedStore = persistor;

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
