import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { widthPercentage, heightPercentage, fontPercentage } from '../Functions/ResponsiveSize'

export default function MemoRenderItem({ itemId, title, content, navigation }) {
    return (
        <Pressable 
            style={styles.memoCard}
            onPress={() => {
                navigation.navigate("detail", {
                    itemId: itemId
                })
            }}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.content}>{content}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    memoCard: {
      flex: 1,
      backgroundColor: 'white',
      borderRadius: 12,
      marginBottom: heightPercentage(0.2),
      paddingHorizontal: widthPercentage(0.3),
      paddingVertical: heightPercentage(0.1),
    },
    title: {
        fontSize: fontPercentage(15)
    },
    content: {
        fontSize: fontPercentage(10)
    }
});