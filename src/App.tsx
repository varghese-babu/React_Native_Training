/**
 * Sample Employee App
 */

import RootNavigation from './navigation/rootNavigation';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { NativeBaseProvider } from 'native-base';
import { store } from '@storage/store';

const App = () => (
  <NativeBaseProvider>
    <ReduxProvider store={store}>
      <RootNavigation />
    </ReduxProvider>
  </NativeBaseProvider>
);

export default App;
