import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

export default function MemoListHeader({ navigation }) {
    return (
        <Pressable 
            style={styles.memoCard}
            onPress={() => {
                navigation.navigate("new")
            }}>
            <Text>Let's make new MEMO!!</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    memoCard: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 12,
        marginBottom: 8,
    },
})