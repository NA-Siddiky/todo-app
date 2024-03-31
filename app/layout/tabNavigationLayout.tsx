import React from 'react';
import {View} from 'react-native';
import Navigation from '../routes/navigation';

const TabNavigationLayout = ({children}: any) => {
  return (
    <>
      <View>{children}</View>
      <Navigation />
    </>
  );
};

export default TabNavigationLayout;
