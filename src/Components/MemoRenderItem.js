import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

export default function MemoRenderItem({ itemId, title, content, navigation }) {
    return (
        <Pressable 
            style={styles.memoCard}
            onPress={() => {
                navigation.navigate("detail", {
                    itemId: itemId
                })
            }}>
            <Text>{title}</Text>
            <Text>{content}</Text>
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
});