import axios from 'axios';
import React, { useState } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const ViewStyled = styled(View)`
    backgound-color: white;
`;

const FontStyled = styled(Text)`
    font-family: 'NanumGothicCoding-Regular';
`;

const HomeScreen = ({ navigation }) => {
    const [datas, setDatas] = useState([])

    const _callApi = async () => {
        try {
            let res = await axios.get('http://127.0.0.1:8000/api/test/');
            let data = res.data;
            setDatas(data);
            console.log(datas)
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'white' }}>
            {datas.map((data, idx) => {
                return (
                    <TouchableOpacity
                        onPress={()=> {
                            navigation.navigate('HomeDetailScreen', {
                                title: data.Title
                            })
                        }}
                    >
                        <Text key={idx}>{data.Name}</Text>
                    </TouchableOpacity>
                ) 
            })}
            <Button title="apiCall" onPress={_callApi} />
        </View>
    )
}

export default HomeScreen;