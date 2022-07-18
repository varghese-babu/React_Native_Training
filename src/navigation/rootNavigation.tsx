import React, { FunctionComponent } from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { AddEmployeeScreen, HomeScreen } from '@screens';
import { ScreenNames } from './screenNames';
import {
  isReadyRef,
  navigatorRef
} from '@services/navigation/navigationService';
import osPlatforms from '../constants/osPlatforms';

const { Screen, Navigator } = createStackNavigator();

const RootNavigation: FunctionComponent = () => (
  <NavigationContainer
    ref={navigatorRef}
    onReady={() => {
      // @ts-ignore
      isReadyRef.current = true;
    }}>
    <Navigator
      initialRouteName={ScreenNames.AddEmployee}
      screenOptions={{
        headerTitle: '',
        ...(Platform.OS === osPlatforms.IOS && {
          headerStyle: { height: 50 }
        }),
        ...(Platform.OS === osPlatforms.ANDROID && {
          headerShown: false
        }),
        // @ts-ignore
        headerLeft: null
      }}>
      <Screen name={ScreenNames.Home} component={HomeScreen} />
      <Screen name={ScreenNames.AddEmployee} component={AddEmployeeScreen} />
    </Navigator>
  </NavigationContainer>
);

export default RootNavigation;
