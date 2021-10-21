import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import styled from 'styled-components';
import Button from 'components/utils/Button';

const ContainerViewStyled = styled(SafeAreaView)`
    flex: 1;
    padding: 40px 15px 15px 15px;
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
    height: 150px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`;

const HederLabelFontStyled = styled(Text)`
    font-size: 18px;
    font-family: 'NanumGothicCoding-Regular';
    padding-top: 5px;
    padding-bottom: 5px;
`;

const BodyLabelFontStyled = styled(Text)`
    font-size: 13px;
    font-family: 'NanumGothicCoding-Regular';
    padding-top: 5px;
    padding-bottom: 5px;
`;

const IntroductionContainerStyled = styled(View)`
    flex: 1;
    padding: 15px;
    background-color: white;
`;

const IntroductionMiddleContainerStyled = styled(View)`
    margin: 20px;
    flex-direction: row;
    flex-wrap: wrap;
`;

const MiddleTextStyled = styled(Text)`
    flex: 1;
    font-family: 'NanumGothicCoding-Regular';
    font-size: 14px;
    font-weight: 700;
`;

const MiddleTextContainerStyled = styled(View)`  
    flex-direction: row;
    flex-wrap: wrap;
`;

const ButtonViewStyled = styled(View)`
    justify-content: center;
`;

const SubscribeViewStyled = styled(View)`
    flex: 2
`;

const TestViewStyled = styled(View)`
    flex: 1;
    margin: 20px;
    border: 1px solid black;
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
                
                {/* 상단 소개글 */}
                <IntroductionContainerStyled>
                    <HederLabelFontStyled>
                        클로이의 홈
                    </HederLabelFontStyled>
                    <BodyLabelFontStyled>
                        홈화면 버튼을 눌러 간단한 소개글을 작성해보세요.
                    </BodyLabelFontStyled>
                </IntroductionContainerStyled>

                {/* 상단 구독, 관심작가 */}
                <IntroductionMiddleContainerStyled>
                    <SubscribeViewStyled>
                        <View>
                            <MiddleTextContainerStyled>
                                <MiddleTextStyled>
                                    324
                                </MiddleTextStyled>
                                <MiddleTextStyled>
                                    17
                                </MiddleTextStyled>
                            </MiddleTextContainerStyled>
                        </View>
                        <View>
                            <MiddleTextContainerStyled>
                                <MiddleTextStyled>
                                    구독자
                                </MiddleTextStyled>
                                <MiddleTextStyled>
                                    관심작가
                                </MiddleTextStyled>
                            </MiddleTextContainerStyled>
                        </View>
                    </SubscribeViewStyled>
                    <ButtonViewStyled>
                       <Button />
                    </ButtonViewStyled>
                </IntroductionMiddleContainerStyled>

                <TestViewStyled>
                    <TouchableOpacity >
                        <Text>버튼</Text>
                    </TouchableOpacity>
                </TestViewStyled>
                
            </ContainerScrollViewStyled>
        </ContainerViewStyled>
    )
}
