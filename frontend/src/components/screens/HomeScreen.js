import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import styled from 'styled-components';

const FontStyled = styled(Text)`
    font-size: 30px;
    font-family: 'NanumGothicCoding-Regular';
`;

export default function HomeScreen() {
    return (
            <FontStyled>클로이의 하루</FontStyled>
    )
}