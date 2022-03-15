import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import MemoRenderItem from '../Components/MemoRenderItem'
import MemoListHeader from '../Components/MemoListHeader'
import { widthPercentage, heightPercentage, fontPercentage } from '../Functions/ResponsiveSize'

const DATA = [
  {
    id: 1,
    title: 'first memo',
    content: 'this is first memo card'
  },
  {
    id: 2,
    title: 'second memo',
    content: 'this is second memo card'
  },
  {
    id: 3,
    title: 'third memo',
    content: 'this is second memo card'
  },
]


export default function MemoScreen({ navigation }) {

  const memoRender = ({ item }) => (
    <MemoRenderItem 
      itemId={item.id} 
      title={item.title} 
      content={item.content} 
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