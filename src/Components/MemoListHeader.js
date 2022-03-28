import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { widthPercentage, heightPercentage, fontPercentage } from '../Functions/ResponsiveSize'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function MemoListHeader({ navigation }) {
    return (
        <Pressable 
            style={styles.memoCard}
            onPress={() => {
                navigation.navigate("write")
            }}>
            <Ionicons name="add-circle-outline" size={widthPercentage(0.7)} color="black"/>
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
        alignItems: 'center'
    },
})