import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from 'react';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { MaterialTopTabParamList } from '../types';


const TopTab = createMaterialTopTabNavigator<MaterialTopTabParamList>();

export default function TopTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <TopTab.Navigator
      initialRouteName="TabOne"
      tabBar={() => null}
      >
      <TopTab.Screen
        name="TabOne"
        component={TabOneScreen}
      />
      <TopTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        
      />
    </TopTab.Navigator>
  );
}
