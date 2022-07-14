import RootNavigation from './navigation/rootNavigation';
import React, { useEffect } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { store } from './storage/store';
import { NativeBaseProvider } from 'native-base';

const App = () => {

  return (
    <NativeBaseProvider>
      <PaperProvider>
        <ReduxProvider store={store}>
          <RootNavigation />
        </ReduxProvider>
      </PaperProvider>
    </NativeBaseProvider>
  );
};

export default App;