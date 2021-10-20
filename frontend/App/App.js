import React, { useState } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import axios from 'axios';
// import Sample from 'modules/containers/sampleContainer';

export default function App() {
    const [datas, setDatas] = useState('');

    const _callApi = async () => {
      try {
        let res = await axios.get('http://127.0.0.1:8000/api/test/');
        let data = res.data;
        setDatas(data[0].Title);
        console.log("자료 ", datas);
        return res;
      } catch(error) {
        console.log('자료 Error', JSON.stringify(error, null, 4))
      }
    } // 연결이 되지 않을 시 Windows CMD 입력 -> adb reverse tcp:<YOUR PORT> tcp:<YOUR PORT>
  
    return (
        <SafeAreaView>
        <View>
          <Text>Hello Wolrd</Text>
        </View>
          <View>
            <Text>{datas}</Text>
            <Button
              title="버튼"
              onPress={_callApi}
            />
          </View>
        </SafeAreaView>
    )
}
