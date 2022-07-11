import React, { FunctionComponent } from 'react';
import HomePage from '@pages/home/home';
import { HomeScreenProps } from './types';

const HomeScreen: FunctionComponent = (props: HomeScreenProps) => (
  <HomePage {...props} />
);

export default HomeScreen;
