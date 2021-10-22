import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import styled from 'styled-components';
import Button from 'components/utils/Button';

const ContainerViewStyled = styled(SafeAreaView)`
    flex: 1;
    padding: 0px 15px 15px 15px;
    flex-direction: column;
    background-color: white;
`;

const ContainerScrollViewStyled = styled(ScrollView)`
    // margin-horizontal: 1px;
`;

const ProfileImageViewStyled = styled(View)`
    flex: 1;
    padding-top: 40px;
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
    margin: 20px 20px 60px 20px;
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
    flex-direction: row;
    margin: 20px;
`;

const TouchableOpacityStyled = styled(TouchableOpacity)`
    margin-right: 10px;
`;

const TripImageStyled = styled(Image)`
    width: 100%;
    height: 300px;
    margin-top: 10px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
`;

export default function ProfileHomeScreen() {
    const [activeIndex, setActiveIndex] = useState(0);

    const tabClickHandler=(index)=>{
        setActiveIndex(index);
    };

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
                        테스트유저 홈
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
                    <TouchableOpacityStyled
                        style={activeIndex === 0 && {borderBottomWidth: 3, borderBottomColor: '#06bcee'}}
                        onPress={()=> tabClickHandler(0)}>
                        <Text
                            style={{ 
                                fontWeight: 'bold', 
                                paddingLeft: 18,
                                paddingRight: 18,
                                paddingTop: 10,
                                paddingBottom: 10,
                                fontSize: 15
                        }}>
                        여행기
                        </Text>
                    </TouchableOpacityStyled>
                    <TouchableOpacityStyled
                        style={activeIndex === 1 && {borderBottomWidth: 3, borderBottomColor: '#06bcee'}}
                        onPress={()=> tabClickHandler(1)}>
                        <Text
                            style={{ 
                                fontWeight: 'bold', 
                                // textDecorationLine: 'underline', 
                                paddingLeft: 18,
                                paddingRight: 18,
                                paddingTop: 10,
                                paddingBottom: 10,
                                fontSize: 15
                        }}>
                        북마크
                        </Text>
                    </TouchableOpacityStyled>
                </TestViewStyled>
                
                {activeIndex === 0 
                    ? 
                    /* 여행기 이미지 */
                    <View style={{flex:1, marginLeft: 20, marginRight: 20, marginBottom: 55}}>
                        <TripImageStyled
                            source={{
                                uri: 'https://images.unsplash.com/photo-1634337256330-aae44dc7b8f6?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                            }}
                        />
                        <TripImageStyled
                            source={{
                                uri: 'https://images.unsplash.com/photo-1634819875292-83e02980a99b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                            }}
                        />
                    </View>
                    :
                    /* 북마크 이미지 */
                    <View style={{flex:1, marginLeft: 20, marginRight: 20, marginBottom: 55}}>
                    <TripImageStyled
                        source={{
                            uri: 'https://images.unsplash.com/photo-1634803925080-2e0e924c9d5b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                        }}
                    />
                    <TripImageStyled
                        source={{
                            uri: 'https://images.unsplash.com/photo-1634822127937-93cdfe9109ff?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                        }}
                    />
                    </View>
                }


            </ContainerScrollViewStyled>
        </ContainerViewStyled>
    )
}
