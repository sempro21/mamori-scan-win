import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { RouteProp } from '@react-navigation/native';

import HomeScreen from '../schermi/HomeScreen';
import ProductsScreen from '../schermi/ProductsScreen';
import ListsScreen from '../schermi/ListsScreen';
import ProfileScreen from '../schermi/ProfileScreen';
import ScanWinScreen from '../schermi/ScanWinScreen';

export type TabParamList = {
  Home: undefined;
  Products: undefined;
  Lists: undefined;
  ScanWin: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="ScanWin"
      screenOptions={({ route }: { route: RouteProp<TabParamList> }) => ({
        tabBarIcon: ({ color, size }: { color: string; size: number }) => {
          let icon: keyof typeof Ionicons.glyphMap = 'home-outline';

          if (route.name === 'Products') icon = 'search-outline';
          if (route.name === 'Lists') icon = 'list-outline';
          if (route.name === 'Profile') icon = 'person-outline';
          if (route.name === 'ScanWin') icon = 'ticket-outline';

          return <Ionicons name={icon} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: '#3dbf7e',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Products" component={ProductsScreen} />
      <Tab.Screen name="Lists" component={ListsScreen} />
      <Tab.Screen name="ScanWin" component={ScanWinScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
