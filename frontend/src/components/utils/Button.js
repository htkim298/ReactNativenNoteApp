import * as React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MyComponent = ({ onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.6}>
        <Button
            style={{ 
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
            }}
            color="black"
            mode="outlined"
            onPress={onPress}
        >
           <Text style={{ fontSize: 13 }}>홈화면 편집</Text>
        </Button>
    </TouchableOpacity>
  );
};

export default MyComponent;