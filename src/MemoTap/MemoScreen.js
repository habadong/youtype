import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Button,
} from 'react-native';
import MemoRenderItem from '../Components/MemoRenderItem';
import MemoListHeader from '../Components/MemoListHeader';
import {
  widthPercentage,
  heightPercentage,
  fontPercentage,
} from '../Functions/ResponsiveSize';
import firestore from '@react-native-firebase/firestore';

const DATA = [
  {
    id: 1,
    title: 'first memo',
    content: 'this is first memo card',
    img: 'https://img.piku.co.kr/w/uploads/5u2qx2/003ae4c2caa72e35c31d6bf6f57290f8.jpg',
  },
  {
    id: 2,
    title: 'second memo',
    content: 'this is second memo card',
    img: 'https://img.piku.co.kr/w/uploads/5u2qx2/94abd2654f8b9b23a65f08b15c39b821.jpg',
  },
  {
    id: 3,
    title: 'third memo',
    content: 'this is third memo card',
    img: 'https://img.piku.co.kr/w/uploads/5u2qx2/37d56bdaa52e1bb78896052f93396727.jpg',
  },
  {
    id: 4,
    title: '4th memo',
    content: 'this is 4th memo card',
    img: '',
  },
];

export default function MemoScreen({navigation}) {
  const [memos, setMemos] = useState([]);
  const [loading, setLoading] = useState(true);
  const ref = firestore().collection('memos');

  useEffect(() => {
    return ref.onSnapshot(querySnapshot => {
      const list = [];
      querySnapshot.forEach(doc => {
        const {title, maintext} = doc.data();
        list.push({
          id: doc.id,
          title,
          maintext,
        });
      });

      setMemos(list);
      console.log(list)
      if (loading) {
        setLoading(false);
      }
    });
  }, []);

  const memoRender = ({item}) => (
    <MemoRenderItem
      itemId={item.id}
      title={item.title}
      mainText={item.maintext}
      img={item.img}
      navigation={navigation}
    />
  );

  const listHeader = () => {
    return <MemoListHeader navigation={navigation} />;
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <FlatList
        data={memos}
        renderItem={memoRender}
        keyExtractor={item => item.id}
        ListHeaderComponent={listHeader}
        contentContainerStyle={{paddingTop: heightPercentage(0.2)}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    paddingHorizontal: widthPercentage(0.3),
  },
});
