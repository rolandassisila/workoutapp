import createSagaMiddleware from 'redux-saga';
import storage from '@react-native-async-storage/async-storage';
import { compact } from 'lodash';
import { persistReducer, persistStore } from 'redux-persist';
import { applyMiddleware, compose, createStore } from 'redux';

import { rootSaga } from './sagas';
import FeatureEnabler from '../featureEnabler';
import { combinedReducer } from './reducers';
import { initReactotron } from '../utils/reactotron';

const persistorConfig = {
  key: '@<YourAppName>:state', // TODO: Rename YourAppName
  storage,
  whitelist: [],
};

export const configStore = (initialState = {}) => {
  let sagaMonitor = undefined;
  let reactorEnhancer = undefined;

  if (FeatureEnabler.reactotron) {
    const Reactotron = initReactotron();
    sagaMonitor = Reactotron.createSagaMonitor();
    reactorEnhancer = Reactotron.createEnhancer();
    console.tron = Reactotron;
  } else {
    console.tron = { log: () => null };
  }

  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  const appliedMiddleware = applyMiddleware(sagaMiddleware);
  const enhancers = compose(...compact([appliedMiddleware, reactorEnhancer]));
  const persistedReducer = persistReducer(persistorConfig, combinedReducer);
  const store = createStore(persistedReducer, initialState, enhancers);
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);

  return { store, persistor };
};
