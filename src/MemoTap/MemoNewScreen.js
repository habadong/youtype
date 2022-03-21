import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView, TextInput, Pressable } from 'react-native'
import { widthPercentage, heightPercentage, fontPercentage } from '../Functions/ResponsiveSize'

export default function MemoNewScreen({ navigation }) {
    const [title, setTitle] = useState('')
    const [mainText, setMainText] = useState('')
    const [attachment, setAttachment] = useState('')


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.top}>
                    <TextInput 
                        style={styles.title}
                        value={title}
                        placeholder='제목'
                        placeholderTextColor='#dcdcdc'
                        onChangeText={text => setTitle(text)}
                    />
                </View>
                <View style={styles.middle}>
                    <TextInput 
                        style={styles.mainText}
                        scrollEnabled={false}
                        textAlignVertical='top'
                        multiline
                        value={mainText}
                        placeholder='내용을 입력'
                        placeholderTextColor='#dcdcdc'
                        onChangeText={text => setMainText(text)}
                    />
                </View>
                <View style={styles.bottom}>
                    <Pressable
                        style={styles.attachmentButton}
                        onPress={() => {}}>
                        <Text style={styles.attachmentText}>첨부파일 넣기</Text>
                    </Pressable>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollView: {
        paddingHorizontal: widthPercentage(0.3),
        paddingVertical: heightPercentage(0.2),
        marginHorizontal: widthPercentage(0.3),
    },
    top: {
        flex: 2,
    },
    title: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#dcdcdc',
    },
    middle: {
        flex: 6,
        marginVertical: heightPercentage(0.3),
    },
    mainText: {
        padding: 10,
        minHeight: heightPercentage(5),
    },
    bottom: {
        flex: 2,
        borderTopWidth: 1,
        borderTopColor: '#dcdcdc',
        paddingTop: heightPercentage(0.2),
    },
    attachmentButton: {
        borderWidth: 1,
        borderRadius: 12,
        borderColor: 'blue',
        width: widthPercentage(2.2),
        height: heightPercentage(0.5),
        alignItems: 'center',
        justifyContent: 'center',
    },
    attachmentText: {
        fontSize: fontPercentage(12),
        color: 'blue',
    }
})