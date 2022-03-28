import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MainScreen from './src/MainScreen';
import LoginScreen from './src/LoginScreen';
import MemoScreen from './src/MemoTap/MemoScreen';
import MemoWriteScreen from './src/MemoTap/MemoWriteScreen'
import NoticeScreen from './src/NoticeTap/NoticeScreen';

const googleSigninConfigure = () => {
  GoogleSignin.configure({
    webClientId: '192568046883-uofeokcv2kg0r0m07frg12lshoesldaa.apps.googleusercontent.com',
  });
};

const MemoStack = createNativeStackNavigator();

const MemoStackScreen = () => {
  return (
    <MemoStack.Navigator>
      <MemoStack.Screen name="memo" component={MemoScreen} />
      <MemoStack.Screen name="write" component={MemoWriteScreen} />
    </MemoStack.Navigator>
  )
}

const NoticeStack = createNativeStackNavigator();

const NoticeStackScreen = () => {
  return (
    <NoticeStack.Navigator>
      <NoticeStack.Screen name="notice" component={NoticeScreen} />
    </NoticeStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

const App = () => {
  const [islogined, setIslogined] = useState(false);

  const onGoogleButtonPress = async () => {
    const { idToken } = await GoogleSignin.signIn(); // 유저의 idToken 을 가져옴
    const googleCredential = auth.GoogleAuthProvider.credential(idToken); // idToken을 사용해 google credential을 생성한다
    return auth().signInWithCredential(googleCredential); // credential로 사용자를 앱에 로그인 시킨다
  };

  auth().onAuthStateChanged((user) => {
    if(user) {
      setIslogined(true)
    } else {
      setIslogined(false)
    }
  });

  useEffect(() => {
    googleSigninConfigure();

  }, [])

  if (islogined) {
    return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName

            if(route.name == '메모') {
              iconName = focused ? 'book' : 'book-outline'
            } else if(route.name == '알림') {
              iconName = focused ? 'notifications' : 'notifications-outline'
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: 'purple',
          tabBarInactiveTintColor: 'gray',
        })}>
          <Tab.Screen name="메모" component={MemoStackScreen} options={{headerShown:false}}/>
          <Tab.Screen name="알림" component={NoticeStackScreen} options={{headerShown:false}}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <LoginScreen onGoogleButtonPress={onGoogleButtonPress} />
  );

};



export default App;