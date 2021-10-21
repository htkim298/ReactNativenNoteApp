import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import styled from 'styled-components';

const ContainerViewStyled = styled(SafeAreaView)`
    flex: 1;
    padding: 15px;
    flex-direction: column;
    background-color: white;
`;

const ContainerScrollViewStyled = styled(ScrollView)`
    // margin-horizontal: 1px;
`;

const ProfileImageViewStyled = styled(View)`
    flex: 1;
    width: 100%;
`;

const ProfileImageStyled = styled(Image)`
    width: 100%;
    height: 100px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`;


const SecondViewStyled = styled(View)`
    height: 100%;
    background-color: white;
    border: 1px solid gray;
`;

export default function ProfileHomeScreen() {
    return (

        <ContainerViewStyled>
            <ContainerScrollViewStyled>
                <ProfileImageViewStyled>
                    <ProfileImageStyled
                        source={{
                        uri: 'https://images.unsplash.com/photo-1634746027343-985ad425b8b5?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                        }}
                    />
                </ProfileImageViewStyled>
                <View style={{ height: 300 }}>
                    <SecondViewStyled></SecondViewStyled>
                </View>
                <View style={{ height: 300 }}>
                    <SecondViewStyled></SecondViewStyled>
                </View>
            </ContainerScrollViewStyled>
        </ContainerViewStyled>
        // <ContainerViewStyled>
        //     <ScrollView style={{ width: 100}}>
        //         <ProfileImageViewStyled>
        //             <ProfileImageStyled
        //                 source={{
        //                 uri: 'https://images.unsplash.com/photo-1634746027343-985ad425b8b5?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        //                 }}
        //             />
        //         </ProfileImageViewStyled>
        //         
        // </ContainerViewStyled>

    )
}
