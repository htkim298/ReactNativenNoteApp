import React, { useState } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerStackScreen from 'components/routers/DrawerStackScreen';

const App = () => {
    return (
      <NavigationContainer>
          <DrawerStackScreen />
      </NavigationContainer>
    )
}

export default App;
