import React from 'react'
import { View, Text } from 'react-native'

export default function MemoDetailScreen({ navigation, route }) {
    const {itemId} = route.params

    return (
        <View>
            <Text>Hello MemoDetailScreen</Text>
            <Text>this itemId is {itemId} !!</Text>
        </View>
    )
}
