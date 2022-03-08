import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MainScreen from './src/MainScreen';
import LoginScreen from './src/LoginScreen';
import RecipeScreen from './src/RecipeTap/RecipeScreen';
import NoticeScreen from './src/NoticeTap/NoticeScreen';

const Stack = createNativeStackNavigator();

const googleSigninConfigure = () => {
  GoogleSignin.configure({
    webClientId: '192568046883-uofeokcv2kg0r0m07frg12lshoesldaa.apps.googleusercontent.com',
  });
};

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

            if(route.name == 'Recipe') {
              iconName = focused ? 'book' : 'book-outline'
            } else if(route.name == 'Notice') {
              iconName = focused ? 'notifications' : 'notifications-outline'
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: 'purple',
          tabBarInactiveTintColor: 'gray',
        })}>
          <Tab.Screen name="Recipe" component={RecipeScreen} />
          <Tab.Screen name="Notice" component={NoticeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <LoginScreen onGoogleButtonPress={onGoogleButtonPress} />
  );

};



export default App;