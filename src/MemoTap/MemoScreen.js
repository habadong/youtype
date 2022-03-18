import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList, Button } from 'react-native'
import MemoRenderItem from '../Components/MemoRenderItem'
import MemoListHeader from '../Components/MemoListHeader'
import { widthPercentage, heightPercentage, fontPercentage } from '../Functions/ResponsiveSize'
import firestore from '@react-native-firebase/firestore';

const DATA = [
  {
    id: 1,
    title: 'first memo',
    content: 'this is first memo card',
    img: 'https://img.piku.co.kr/w/uploads/5u2qx2/003ae4c2caa72e35c31d6bf6f57290f8.jpg'
  },
  {
    id: 2,
    title: 'second memo',
    content: 'this is second memo card',
    img: 'https://img.piku.co.kr/w/uploads/5u2qx2/94abd2654f8b9b23a65f08b15c39b821.jpg'
  },
  {
    id: 3,
    title: 'third memo',
    content: 'this is third memo card',
    img: 'https://img.piku.co.kr/w/uploads/5u2qx2/37d56bdaa52e1bb78896052f93396727.jpg'
  },
  {
    id: 4,
    title: '4th memo',
    content: 'this is 4th memo card',
  },
]


export default function MemoScreen({ navigation }) {

  // const ref = firestore().collection('users')


  // async function addData() {
  //   await ref.add({
  //     title: 'hi',
  //     check: false,
  //   })
  // }

  const memoRender = ({ item }) => (
    <MemoRenderItem 
      itemId={item.id} 
      title={item.title} 
      content={item.content} 
      img={item.img}
      navigation={navigation}
    />
  )
  const listHeader = () => {
    return <MemoListHeader navigation={navigation} />
  }

    return (
        <SafeAreaView style={styles.backgroundStyle}>
            <FlatList
              data={DATA}
              renderItem={memoRender}
              keyExtractor={item => item.id}
              ListHeaderComponent={listHeader}
              contentContainerStyle={{paddingTop: heightPercentage(0.2)}}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
      flex: 1,
      paddingHorizontal: widthPercentage(0.3)
    },
});