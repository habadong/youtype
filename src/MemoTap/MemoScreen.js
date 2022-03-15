import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import MemoRenderItem from '../Components/MemoRenderItem'
import MemoListHeader from '../Components/MemoListHeader'

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
            <View style={styles.container}>
              <FlatList
                data={DATA}
                renderItem={memoRender}
                keyExtractor={item => item.id}
                ListHeaderComponent={listHeader}
              />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
      flex: 1,
    },
    container: {
      // backgroundColor: 'green',
      flex: 1,
    },
    innerTopContainer: {
      // backgroundColor: 'blue',
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center',
    },
    innerMiddleContainer: {
      // backgroundColor: 'red',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    innerBottomContainer: {
      // backgroundColor: 'gray',
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loginButton: {
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
      width: 250,
      height: 40,
      borderRadius: 20,
    },
});