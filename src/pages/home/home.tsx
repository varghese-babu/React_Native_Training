import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { HomePageProps } from './types';
import styles from './styles';
import { useGetHomeContentsQuery } from '@services/hooks/home';
import { Spinner } from 'native-base';
import { colors } from '@themes';
// import { useAppSelector } from '../../hooks/reduxHooks';

const HomePage: FunctionComponent<HomePageProps> = () => {

  return (
    
      <View>
        <Text>hello world!!!</Text>
      </View>


  );
};

export default HomePage;
