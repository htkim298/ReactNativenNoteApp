import React, { useState } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import DrawerStackScreen from 'components/routers/DrawerStackScreen';

export default function App() {
    return (
      <NavigationContainer>
        <SafeAreaView style={{ flex:1 }}>
          <DrawerStackScreen />
        </SafeAreaView>
      </NavigationContainer>
    )
}
