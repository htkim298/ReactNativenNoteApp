import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
// import { useDispatch, useSelector } from 'react-redux'
// const dispatch = useDispatch();
// const { data } = useSelector((state) => {
//     console.log("useSelector",state.samples.Title[0].id)
//     return {
//         data: state.samples.Title[0].Title
//     }
// })

const Sample = ({ ongetSampleData, title }) => {
    console.log("콘솔로그",  title[0].Name)
    console.log("콘솔로그",  title.map((data,idx) => {
       return <Text>{data.id}</Text> 
    }))
    return (
        <View>
            <Text>
                {title && title.map((data,idx) => {
                    return (
                        <View key={idx}>
                            <Text>{data.Name}</Text>
                        </View>
                        )
                })}
            </Text>
            <Button
            title="리덕스 샘플 버튼"
            onPress={ongetSampleData}
            />

        </View>
    )
}

const styles = StyleSheet.create({})

export default Sample;