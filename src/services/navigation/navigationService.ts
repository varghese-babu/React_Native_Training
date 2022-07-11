import { StackActions } from 'react-navigation';
import { CommonActions } from '@react-navigation/native';
import React from 'react';

/**
 * This ref is passed to RootNavigation for setting NavigationContainer
 */
const isReadyRef = React.createRef<boolean | null>();

const navigatorRef = React.createRef<any>();

/**
 * Helper method to navigate to the requested route.
 *
 * @param {string} routeName
 * @param {object} params
 */
const navigateTo = (name: string, params: object = {}) => {
  if (isReadyRef.current && navigatorRef.current?.dispatch) {
    navigatorRef.current.dispatch(
      CommonActions.navigate({
        name,
        params
      })
    );
  }
};

/**
 * Helper method to go back to the previous page in the stack
 */
function goBack() {
  if (isReadyRef.current && navigatorRef.current?.dispatch) {
    navigatorRef.current.dispatch(CommonActions.goBack());
  }
}

/**
 * Call this function when you want to navigate to a specific route AND reset the navigation history.
 *
 * That means the user cannot go back. This is useful for example to redirect from a splashscreen to
 * the main screen: the user should not be able to go back to the splashscreen.
 *
 * @param routeName The name of the route to navigate to. Routes are defined in RootScreen using createStackNavigator()
 * @param params Route parameters.
 */
function navigateAndReset(routeName: string, params: object = {}) {
  if (isReadyRef.current && navigatorRef.current?.reset) {
    navigatorRef.current.reset({
      index: 0,
      routes: [{ name: routeName, params }]
    });
  }
}

/**
 * Helper method to go pop from the navigation stack
 *
 * @param {string} key
 */
function pop(key: string) {
  if (isReadyRef.current && navigatorRef.current?.dispatch) {
    navigatorRef.current.dispatch(StackActions.pop({ key }));
  }
}

export { goBack, navigateTo, navigateAndReset, pop, navigatorRef, isReadyRef };
