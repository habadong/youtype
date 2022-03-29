import React, { useState, useLayoutEffect, useEffect } from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView, TextInput, Pressable, FlatList, ImageBackground } from 'react-native'
import { widthPercentage, heightPercentage, fontPercentage } from '../Functions/ResponsiveSize'
import firestore from '@react-native-firebase/firestore';

export default function MemoWriteScreen({ navigation, route }) {
    const {itemId} = route.params
    const [title, setTitle] = useState(route.params.title)
    const [mainText, setMainText] = useState(route.params.mainText)
    const [attachment, setAttachment] = useState([
        'https://img.piku.co.kr/w/uploads/5u2qx2/003ae4c2caa72e35c31d6bf6f57290f8.jpg',
        'https://img.piku.co.kr/w/uploads/5u2qx2/94abd2654f8b9b23a65f08b15c39b821.jpg',
        'https://img.piku.co.kr/w/uploads/5u2qx2/003ae4c2caa72e35c31d6bf6f57290f8.jpg',
        'https://img.piku.co.kr/w/uploads/5u2qx2/003ae4c2caa72e35c31d6bf6f57290f8.jpg',
        'https://img.piku.co.kr/w/uploads/5u2qx2/003ae4c2caa72e35c31d6bf6f57290f8.jpg',
    ])
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

    const renderItemAttachment = ({item}) => {
        return (
            <Pressable
                style={styles.attachmentButton}
                onPress={() => console.log(item)}>
                <ImageBackground
                    style={styles.image}
                    imageStyle={{borderRadius: 12}}
                    source={{uri: item}}/>
            </Pressable>
        )
    }

    const ListHeaderAttachment = () => {
        return (
            <Pressable
                style={styles.attachmentButton}
                onPress={() => {}}>
                <Text style={styles.attachmentText}>첨부파일 넣기</Text>
            </Pressable>
        )
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
                    <FlatList
                        data={attachment}
                        renderItem={renderItemAttachment}
                        contentContainerStyle={styles.attachmentList}
                        ListHeaderComponent={ListHeaderAttachment}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                    />
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
        marginRight: widthPercentage(0.3)
    },
    attachmentText: {
        fontSize: fontPercentage(12),
        color: '#d5d5d5',
    },
    image: {
        flex: 1,
        width: widthPercentage(2),
        height: heightPercentage(1.2),
    },
    attachmentList: {
        alignItems: 'center',
        paddingHorizontal: widthPercentage(0.2),

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