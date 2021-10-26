import React from 'react';
import { Text, View, Button } from 'react-native';

const HomeDetailScreen = ({ navigation, route }) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'white' }}>
            <Text>홈 디테일 변경</Text>
            <Text>{route.params.title}</Text>
            <Button
                title="Go to Details... again"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

export default HomeDetailScreen;