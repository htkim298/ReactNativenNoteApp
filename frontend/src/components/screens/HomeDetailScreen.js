import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components';

const ViewStyled = styled(View)`
    color: red;
background-color: red;

`;

export default function HomeDetailScreen() {
    return (
        <View style={{ flex:1, backgroundColor: 'white'}}>
            <Text>홈디테일</Text>
        </View>
    )
}