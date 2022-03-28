import React, { useState, useLayoutEffect, useEffect } from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView, TextInput, Pressable } from 'react-native'
import { widthPercentage, heightPercentage, fontPercentage } from '../Functions/ResponsiveSize'
import firestore from '@react-native-firebase/firestore';

export default function MemoWriteScreen({ navigation, route }) {
    const {itemId} = route.params
    const [title, setTitle] = useState(route.params.title)
    const [mainText, setMainText] = useState(route.params.mainText)
    const [attachment, setAttachment] = useState('')
    const [save, setSave] = useState(false)

    const ref = firestore().collection('memos')

    async function addMemo() {
        await ref.add({
            title: title,
            maintext: mainText,
            img: '',
        });

        navigation.goBack()
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Pressable
                    style={styles.saveButton}
                    disabled={!save}
                    onPress={() => addMemo()}>
                    <Text style={save ? styles.saveText : styles.nonSaveText}>저장</Text>
                </Pressable>                
            )
        })
    }, [navigation, save])

    useEffect(() => {
        if (route.params.title !== title || route.params.mainText !== mainText) {
            setSave(true)
        } else {
            setSave(false)
        }

    }, [title, mainText])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.cardContainer}>
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
                </View>
            </ScrollView>
            <View style={styles.bottomContainer}>
                <View style={styles.bottom}>
                    <Pressable
                        style={styles.attachmentButton}
                        onPress={() => {}}>
                        <Text style={styles.attachmentText}>첨부파일 넣기</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        paddingHorizontal: widthPercentage(0.3),
        paddingVertical: heightPercentage(0.2),
        flex: 2,
    },
    cardContainer: {
        backgroundColor: 'white',
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        marginHorizontal: widthPercentage(0.1),
        minHeight: heightPercentage(8),
    },
    top: {
        // flex: 2,
    },
    title: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#dcdcdc',
    },
    middle: {
        marginVertical: heightPercentage(0.3),
    },
    mainText: {
        padding: 10,
        minHeight: heightPercentage(5),
    },
    bottomContainer: {
        flex: 0.3,
        paddingHorizontal: widthPercentage(0.3),
    },
    bottom: {
        flex: 1,
        borderTopWidth: 1,
        borderTopColor: '#dcdcdc',
        marginHorizontal: widthPercentage(0.1),
        backgroundColor: 'white'
    },
    attachmentButton: {
        borderWidth: 1,
        borderRadius: 12,
        borderColor: '#d5d5d5',
        width: widthPercentage(2),
        height: heightPercentage(1.2),
        alignItems: 'center',
        justifyContent: 'center',
    },
    attachmentText: {
        fontSize: fontPercentage(12),
        color: '#d5d5d5',
    },
    saveButton: {
        padding: heightPercentage(0.1),
        alignItems: 'center',
        justifyContent: 'center',
    },
    nonSaveButton: {
        padding: heightPercentage(0.1),
        alignItems: 'center',
        justifyContent: 'center',
    },
    saveText: {
        fontSize: fontPercentage(14),
        color: 'blue'
    },
    nonSaveText: {
        fontSize: fontPercentage(14),
        color: '#dcdcdc'
    }
})