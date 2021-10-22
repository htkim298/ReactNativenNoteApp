import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import styled from 'styled-components';

const ViewStyled = styled(View)`
    backgound-color: white;
`;

const FontStyled = styled(Text)`
    font-family: 'NanumGothicCoding-Regular';
`;

export default function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'white' }}>
            <Text>홈 화면</Text>
        </View>
    )
}