import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabStackScreen from './TabStackScreen';

const Drawer = createDrawerNavigator();

export default function DrawerStackScreen() {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="RFHIC" component={TabStackScreen} />
        {/* <Drawer.Screen name="Home" component={HomeScreen} /> */}
        {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
      </Drawer.Navigator>
  );
}